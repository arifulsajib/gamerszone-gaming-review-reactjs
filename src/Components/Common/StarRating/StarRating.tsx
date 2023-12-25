import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
// ts types
interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    return (
      <li className="mx-1" key={idx}>
        {rating >= idx + 1 ? <BsStarFill /> : rating >= idx + 0.5 ? <BsStarHalf /> : <BsStar />}
      </li>
    );
  });
  return <div className="d-flex align-items-start list-unstyled">{stars}</div>;
};

export default StarRating;
