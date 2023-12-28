import { Button, Col, Container, Row } from "react-bootstrap";
import bannerImg from "../../../assets/banner.png";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const HomeBanner = () => {
  return (
    <section
      id="banner"
      className="text-white pt-5 mt-5"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${bannerImg}) center/cover no-repeat`,
        minHeight: "600px"
      }}
    >
      <Container className="mt-5 pt-5">
        <Row>
          <Col md={6}>
            <button className="btn-paste fs-4 fw-semibold">Join Streaming</button>
            <div className="d-none d-md-block my-4">
              <Zoom cascade>
                <h1 className="fs-0 mb-0 ">BEST ONLINE</h1>
                <h1 className="fs-0 mt-0 ">GAME TO PLAY</h1>
              </Zoom>
            </div>
            <div className="d-block d-md-none my-4">
              <Zoom cascade>
                <h1 className="sm-fs-0 mb-0 ">BEST ONLINE</h1>
                <h1 className="sm-fs-0 mt-0 ">GAME TO PLAY</h1>
              </Zoom>
            </div>
            <Fade cascade>
              <p className="fs-5 mb-4">
                Live gaming with lots of other games. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </Fade>
            <Slide>
              <Button variant="outline-info" className="mb-4 px-3 fs-6 fw-semibold">
                PLAY NOW
              </Button>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBanner;
