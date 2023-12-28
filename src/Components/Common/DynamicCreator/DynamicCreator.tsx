import { Col } from "react-bootstrap";
import "./DynamicCreator.css";
import { Creator } from "../../../models/creator.model";
import { Zoom } from "react-awesome-reveal";

interface Props {
  creator: Creator;
}

const DynamicCreator = ({ creator }: Props) => {
  const positions = creator?.positions?.map((position) => position.name);
  const games = creator.games.map((game) => game.name);

  return (
    <>
      <Col className="my-5 d-flex align-items-stretch">
        <Zoom className="d-flex align-items-stretch">
          <div
            className="w-100 bg-dark position-relative"
            style={{
              minHeight: "300px",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(4, 0, 30, 0.9)), url(${creator.image_background}) center/cover no-repeat`
            }}
          >
            <div className="position-absolute top-0 start-50 translate-middle">
              <img src={creator.image} alt="" className="pp-img img-fluid rounded-circle border border-white border-3" width={120} height={120} />
            </div>
            <div className="pt-5 text-center container pb-3">
              <h3 className="pt-5">{creator.name}</h3>
              <div className="d-flex justify-content-center align-items-center">
                <p className="me-1 fw-semibold">Games Count: </p>
                <p className="fs-7">{creator.games_count}</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <p className="me-1 fw-semibold">Position: </p>
                <p className="fs-7">{positions.join(", ")}</p>
              </div>
              <div className="d-flex justify-content-center">
                <p>
                  <span className=" fw-semibold">Games : </span>
                  {games.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </Zoom>
      </Col>
    </>
  );
};

export default DynamicCreator;
