import { Row } from "react-bootstrap";
import UnderLine from "../../Common/UnderLine/UnderLine";
import DynamicGame from "../../Common/DynamicGame/DynamicGame";
import { useGetGamesQuery } from "../../../ReduxStores/apiSlice";
import Spinner from "../../Common/Spinner/Spinner";
import { useNavigate } from "react-router";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

const PopularGames = () => {
  const { data, isLoading } = useGetGamesQuery({ pageNo: 1, pageSize: 9 });
  const games = data?.results;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/games/`);
  };

  return (
    <section className="container bg-blue my-4">
      <div className="pb-4">
        <JackInTheBox>
          <h1 className="text-center pt-4 fs-1 fw-bold text-white">
            TOP POPULAR <span className="text-pink">GAMES</span>
          </h1>
        </JackInTheBox>
        <UnderLine></UnderLine>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {isLoading && <Spinner></Spinner>}
        {games?.map((game) => (
          <DynamicGame key={game.id} game={game}></DynamicGame>
        ))}
      </Row>
      <div className="text-center mt-3">
        <Zoom>
          <button className="btn-paste fw-semibold fs-6" onClick={handleClick}>
            SEE MORE GAMES
          </button>
        </Zoom>
      </div>
    </section>
  );
};

export default PopularGames;
