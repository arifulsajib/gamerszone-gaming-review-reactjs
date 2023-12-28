import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useGetStoresDetailsQuery } from "../../../ReduxStores/apiSlice";
import Spinner from "../Spinner/Spinner";

const StoreDetails = () => {
  const params = useParams();
  const storeID = params.id;
  const { data, isFetching } = useGetStoresDetailsQuery(storeID);

  return (
    <section
      className="container text-white my-4"
      style={{
        minHeight: "450px"
      }}
    >
      {isFetching && <Spinner></Spinner>}
      <Row xs={1} md={2} className="g-4">
        <Col className="d-flex align-items-stretch">
          <img src={data?.image_background} alt="" className="img-fluid object-fit-cover" />
        </Col>
        <Col className="d-flex align-items-center">
          <div>
            <h1 className="fs-2 fw-bold text-paste text-uppercase">{data?.name}</h1>
            <div className="d-flex">
              <p className="fw-bold m-0 me-2">Domain: </p>
              <a href={`https://${data?.domain}`} target="_blank" className="text-decoration-none text-white">
                {data?.domain}
              </a>
            </div>
            <div className="d-flex mb-3">
              <p className="fw-bold me-2">Games Count: </p>
              <p>{data?.games_count}</p>
            </div>
            <div className="text-lightwhite fs-7" dangerouslySetInnerHTML={{ __html: typeof data?.description === "string" ? data?.description : "" }}></div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default StoreDetails;
