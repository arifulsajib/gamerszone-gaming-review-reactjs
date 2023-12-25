import { Row } from "react-bootstrap";
import UnderLine from "../../Common/UnderLine/UnderLine";
import DynamicGame from "../../Common/DynamicGame/DynamicGame";

const PopularGames = () => {
  return (
    <section className="container bg-blue my-4">
      <div className="pb-4">
        <h1 className="text-center pt-4 fs-1 fw-bold text-white">
          TOP POPULAR <span className="text-pink">GAMES</span>
        </h1>
        <UnderLine></UnderLine>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        <DynamicGame></DynamicGame>
        <DynamicGame></DynamicGame>
        <DynamicGame></DynamicGame>
        <DynamicGame></DynamicGame>
        <DynamicGame></DynamicGame>
        <DynamicGame></DynamicGame>
      </Row>
      <div className="text-center mt-3">
        <button className="btn-paste fw-semibold fs-6">SEE MORE GAMES</button>
      </div>
    </section>
  );
};

export default PopularGames;
