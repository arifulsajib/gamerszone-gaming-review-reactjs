import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <section>
      <Navbar className="bg-darkblue" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand as={HashLink} smooth to="#banner" className="ms-3">
            <img src={logo} alt="Brand" width="240" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-semibold fs-5">
              <Nav.Link as={NavLink} className="text-white mx-2" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-white mx-2" to="/creators">
                Creators
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-white mx-2" to="/stores">
                Stores
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-white mx-2" to="/games">
                Games
              </Nav.Link>
            </Nav>
            <Nav.Link as={HashLink} className="text-white me-3 fw-semibold fs-5" smooth to="#footer">
              Content
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
