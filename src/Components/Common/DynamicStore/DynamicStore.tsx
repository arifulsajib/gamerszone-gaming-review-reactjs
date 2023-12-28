import { Col, Row } from "react-bootstrap";
import { Store } from "../../../models/store.model";
import { Link, useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

interface Props {
  store: Store;
}

const DynamicStore = ({ store }: Props) => {
  const storeGames = store.games;

  const navigate = useNavigate();
  const handleStoreClick = (id: number) => {
    navigate(`/stores/${id}`);
  };

  return (
    <>
      <Col className="d-flex align-items-stretch">
        <Zoom className="d-flex align-items-stretch">
          <Row xs={2}>
            <Col>
              <div
                style={{
                  background: `url(${store.image_background}) center/cover no-repeat`
                }}
                className="h-100"
              ></div>
            </Col>
            <Col className="d-flex align-items-center">
              <div className="overflow-hidden">
                <p className="fw-semibold mb-0 fs-5 text-paste cursor-pointer" onClick={() => handleStoreClick(store.id)}>
                  {store.name}
                </p>
                <div className="d-flex flex-wrap">
                  <p className="fw-semibold mb-0 text-wrap me-2">Domain:</p>
                  <a href={`https://${store.domain}`} className="text-decoration-none fs-7 fw-normal text-white " target="_blank">
                    {store.domain}
                  </a>
                </div>
                <p className="fw-semibold mb-0">
                  Games Count: <span className="fs-7 fw-normal">{store.games_count}</span>
                </p>
                <p className="fw-semibold mb-0">Games:</p>
                <ul className="d-flex flex-wrap list-unstyled">
                  {/* dynamic map */}
                  {storeGames?.map((storeGame) => (
                    <li className="bg-pink text-white px-2 rounded-pill fs-7 m-1" key={storeGame.id}>
                      <Link to={`/games/${storeGame.id}`} className="text-decoration-none text-white">
                        {storeGame.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Zoom>
      </Col>
    </>
  );
};

export default DynamicStore;
