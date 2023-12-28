import { Col, Offcanvas, Row, Tab } from "react-bootstrap";
import UnderLine from "../../Common/UnderLine/UnderLine";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import DynamicGenreList from "../../Common/DynamicGenreList/DynamicGenreList";
import DynamicGame from "../../Common/DynamicGame/DynamicGame";
import { useGetGamesByGenreQuery, useGetGenreQuery } from "../../../ReduxStores/apiSlice";
import Spinner from "../../Common/Spinner/Spinner";
import { Genre } from "../../../models/genre.model";
import { JackInTheBox } from "react-awesome-reveal";

const TopGenres = () => {
  // Sidebar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Filter games by genre
  const [genreSlug, setGenreSlug] = useState("action");

  const { data: gamesData, isFetching } = useGetGamesByGenreQuery({ pageNo: 1, pageSize: 6, genre: genreSlug });
  const games = gamesData?.results;

  // genres
  const { data } = useGetGenreQuery({ pageNo: 1, pageSize: 10 });
  const genres = data?.results;

  return (
    <section className="text-white container-fluid my-5">
      <JackInTheBox>
        <h1 className="text-center fw-bold ">
          TOP <span className="text-pink">GENRES</span>
        </h1>
      </JackInTheBox>
      <UnderLine></UnderLine>
      <Row className="g-3 mt-3">
        <Col xs={1} md={2} className="d-flex align-items-stretch">
          <span className="d-lg-none" onClick={handleShow}>
            <GiHamburgerMenu size={20}></GiHamburgerMenu>
          </span>

          <div className="d-flex align-items-center">
            <Offcanvas show={show} onHide={handleClose} responsive="lg">
              <Offcanvas.Header className="bg-blue text-white " closeButton>
                <Offcanvas.Title className="mx-auto fs-2">Genres</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-blue d-flex align-items-center">
                <Tab.Container id="left-tabs-example" defaultActiveKey={genres && genres[0]?.id}>
                  <div className="d-flex flex-column align-items-center h-100">
                    {/* Dynamic Genre */}
                    {genres?.map((genre: Genre) => (
                      <DynamicGenreList key={genre.id} genre={genre} setSlug={setGenreSlug} setShow={setShow}></DynamicGenreList>
                    ))}
                  </div>
                </Tab.Container>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
        <Col xs={11} md={10}>
          <Row md={2} lg={3} className="g-3">
            {
              // dynamic game
              isFetching ? <Spinner></Spinner> : games?.map((game) => <DynamicGame key={game.id} game={game}></DynamicGame>)
            }
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default TopGenres;
