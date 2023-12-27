import { Nav } from "react-bootstrap";
import "./DynamicGenreList.css";
import { Genre } from "../../../models/genre.model";
interface Props {
  genre: Genre;
  setSlug: (string: string) => void;
  setShow: (boolean: boolean) => void;
}
const DynamicGenreList = ({ genre, setSlug, setShow }: Props) => {
  const genreClickHandler = (slug: string) => {
    setSlug(slug);
    setShow(false);
  };
  return (
    <>
      <Nav variant="pills-info genre" className="mx-auto " onClick={() => genreClickHandler(genre.slug)}>
        <Nav.Item>
          <Nav.Link eventKey={genre.id} className="fs-5 fw-semibold text-white px-5 rounded">
            {genre.name}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default DynamicGenreList;
