import { Row } from "react-bootstrap";
import UnderLine from "../../Common/UnderLine/UnderLine";
import DynamicStore from "../../Common/DynamicStore/DynamicStore";

const HomeGameStores = () => {
  return (
    <section className="text-white my-5 container">
      <h1 className="text-center fw-bold">
        OUR <span className="text-pink">GAME STORES</span>
      </h1>
      <UnderLine></UnderLine>
      <Row xs={1} lg={2} className="g-3 mt-3">
        {/* Dynamic */}
        <DynamicStore></DynamicStore>
        <DynamicStore></DynamicStore>
        <DynamicStore></DynamicStore>
        <DynamicStore></DynamicStore>
      </Row>
    </section>
  );
};

export default HomeGameStores;
