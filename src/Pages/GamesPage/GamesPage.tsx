import { Row } from "react-bootstrap";
import UnderLine from "../../Components/Common/UnderLine/UnderLine";
import { useGetGamesQuery } from "../../ReduxStores/apiSlice";
import Spinner from "../../Components/Common/Spinner/Spinner";
import DynamicGame from "../../Components/Common/DynamicGame/DynamicGame";
import Pagination from "../../Components/Common/Pagination/Pagination";
import { useState } from "react";

const GamesPage = () => {
  const [pageNo, setPageNo] = useState(1);

  const { data, isFetching } = useGetGamesQuery({ pageNo: pageNo, pageSize: 12 });
  const games = data?.results;

  return (
    <section
      className="text-white container"
      style={{
        minHeight: "450px"
      }}
    >
      <h1 className="text-center fw-bold ">
        ALL <span className="text-pink">GAMES</span>
      </h1>
      <UnderLine></UnderLine>
      <Row xs={1} md={2} lg={3} className="g-4 my-3">
        {isFetching ? <Spinner></Spinner> : games?.map((game) => <DynamicGame key={game.id} game={game}></DynamicGame>)}
      </Row>
      <Pagination pageHandler={setPageNo} nextPage={data?.next} prevPage={data?.previous} currentPage={pageNo}></Pagination>
    </section>
  );
};

export default GamesPage;
