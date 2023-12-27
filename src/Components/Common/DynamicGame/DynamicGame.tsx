import { Button, Card, Col } from "react-bootstrap";
import StarRating from "../StarRating/StarRating";
import { BsStar } from "react-icons/bs";
import { Game } from "../../../models/game.model";
import { useNavigate } from "react-router";
interface Props {
  game: Game;
}

const DynamicGame = ({ game }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/games/${game.id}`);
  };
  return (
    <>
      <Col className="d-flex align-items-stretch">
        <Card className="border-0 bg-darkblue w-100">
          <div className="position-relative">
            <Card.Img
              variant="top"
              src={game?.background_image}
              className="img-fluid object-fit-cover"
              style={{
                minHeight: "220px",
                maxHeight: "250px"
              }}
            />
            <div className="position-absolute bottom-0 start-0 bg-glass bg-white rounded ms-1 mb-1 fw-semibold d-flex">
              <span className="ms-1">{game?.ratings_count}</span>
              <BsStar className="mt-1 mx-1" size={13}></BsStar>
            </div>
            <div className="position-absolute bottom-0 end-0 text-paste bg-glass mb-1 me-1 rounded">
              <StarRating rating={game?.rating}></StarRating>
            </div>
          </div>
          <Card.Body className="bg-darkblue text-white">
            <Card.Title>{game?.name}</Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-center mt-4">
              <span>
                <span className="mb-0 fs-7 d-block">Release: {game?.released}</span>
                <span className="mb-0 fs-7 d-block">Updated: {game?.updated.slice(0, 10)}</span>
              </span>
              <span className="mt-auto mb-2">
                <Button variant="outline-info mx-3 text-nowrap " onClick={handleClick}>
                  SEE MORE
                </Button>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default DynamicGame;
