import { Row } from "react-bootstrap";
import UnderLine from "../../Common/UnderLine/UnderLine";
import DynamicStore from "../../Common/DynamicStore/DynamicStore";
import { useGetStoresQuery } from "../../../ReduxStores/apiSlice";
import Spinner from "../../Common/Spinner/Spinner";
import { JackInTheBox } from "react-awesome-reveal";

const HomeGameStores = () => {
  const { data, isLoading } = useGetStoresQuery();
  const stores = data?.results;

  return (
    <section className="text-white my-5 container">
      <JackInTheBox>
        <h1 className="text-center fw-bold">
          OUR <span className="text-pink">GAME STORES</span>
        </h1>
      </JackInTheBox>
      <UnderLine></UnderLine>
      <Row xs={1} lg={2} className="g-4 mt-3">
        {isLoading && <Spinner></Spinner>}
        {stores?.map((store) => (
          <DynamicStore key={store.id} store={store}></DynamicStore>
        ))}
      </Row>
    </section>
  );
};

export default HomeGameStores;
