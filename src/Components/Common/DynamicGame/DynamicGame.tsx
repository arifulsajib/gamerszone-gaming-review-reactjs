import { Button, Card, Col, Row } from "react-bootstrap";
import StarRating from "../StarRating/StarRating";
import { BsStar } from "react-icons/bs";

const DynamicGame = () => {
  return (
    <>
      <Col className="d-flex align-items-stretch">
        <Card className="border-0 bg-darkblue">
          <div className="position-relative">
            <Card.Img variant="top" src="https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg" />
            <div className="position-absolute bottom-0 start-0 bg-glass bg-white rounded ms-1 mb-1 fw-semibold d-flex">
              <span className="ms-1">5536</span>
              <BsStar className="mt-1 mx-1" size={13}></BsStar>
            </div>
            <div className="position-absolute bottom-0 end-0 text-paste bg-glass mb-1 me-1 rounded">
              <StarRating rating={4.5}></StarRating>
            </div>
          </div>
          <Card.Body className="bg-darkblue text-white">
            <Card.Title>GRAND THEFT AUTO V</Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <p className="mb-0 fs-7">Release Date: 2013-09-17</p>
                <p className="mb-0 fs-7">Updated: 2023-12-24</p>
              </div>
              <div className="mt-auto mb-2">
                <Button variant="outline-info mx-3 text-nowrap ">SEE MORE</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default DynamicGame;
