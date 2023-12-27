import { Row } from "react-bootstrap";
import UnderLine from "../../Components/Common/UnderLine/UnderLine";
import { useGetGamesQuery } from "../../ReduxStores/apiSlice";
import Spinner from "../../Components/Common/Spinner/Spinner";
import DynamicGame from "../../Components/Common/DynamicGame/DynamicGame";

const GamesPage = () => {
  const { data, isFetching } = useGetGamesQuery({ pageNo: 1, pageSize: 12 });
  const games = data?.results;

  return (
    <section className="text-white container">
      <h1 className="text-center fw-bold ">
        ALL <span className="text-pink">GAMES</span>
      </h1>
      <UnderLine></UnderLine>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {isFetching && <Spinner></Spinner>}
        {games?.map((game) => (
          <DynamicGame key={game.id} game={game}></DynamicGame>
        ))}
      </Row>
    </section>
  );
};

export default GamesPage;
