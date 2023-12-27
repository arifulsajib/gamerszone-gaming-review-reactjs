import { Col, Row } from "react-bootstrap";

const DynamicStore = () => {
  return (
    <>
      <Col>
        <Row xs={2}>
          <Col>
            <div
              style={{
                background: `url(https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg) center/cover no-repeat`
              }}
              className="h-100"
            ></div>
          </Col>
          <Col className="d-flex align-items-center">
            <div>
              <p className="fw-semibold mb-0">STEAM </p>
              <p className="fw-semibold mb-0">
                Domain: <span className="fs-7 fw-normal">store.steampowered.com</span>
              </p>
              <p className="fw-semibold mb-0">
                Games Count: <span className="fs-7 fw-normal">86982</span>
              </p>
              <p className="fw-semibold mb-0">Games:</p>
              <ul className="d-flex flex-wrap list-unstyled">
                {/* dynamic map */}
                <li className="bg-pink text-white px-1 rounded-pill fs-7 m-1">Grant Theft Auto V</li>
                <li className="bg-pink text-white px-1 rounded-pill fs-7 m-1">Borderlands 2</li>
                <li className="bg-pink text-white px-1 rounded-pill fs-7 m-1">Life is strange</li>
                <li className="bg-pink text-white px-1 rounded-pill fs-7 m-1">Bioshok part 2</li>
                <li className="bg-pink text-white px-1 rounded-pill fs-7 m-1">Portal</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default DynamicStore;
