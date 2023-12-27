import { Button } from "react-bootstrap";

interface Props {
  pageHandler: (number: number) => void;
  nextPage: string | null | undefined;
  prevPage: string | null | undefined;
  currentPage: number;
}
const Pagination = ({ pageHandler, nextPage, prevPage, currentPage }: Props) => {
  const pageNextHandler = () => {
    if (nextPage !== null) pageHandler(++currentPage);
  };

  const pagePrevHandler = () => {
    if (prevPage !== null) pageHandler(--currentPage);
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Button variant="info" disabled={prevPage === null ? true : false} onClick={pagePrevHandler}>
        Prev
      </Button>
      <Button variant="info" disabled={nextPage === null ? true : false} onClick={pageNextHandler} className="ms-2">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
