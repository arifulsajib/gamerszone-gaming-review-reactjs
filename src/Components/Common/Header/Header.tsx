import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <section className="mb-3">
      <Navbar className="bg-darkblue" expand="lg">
        <Container>
          <Navbar.Brand as={HashLink} smooth to="#banner">
            <img src={logo} alt="Brand" width="240" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-semibold fs-5">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
