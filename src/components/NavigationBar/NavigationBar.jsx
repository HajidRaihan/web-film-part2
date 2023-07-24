import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <Container fluid style={{ backgroundColor: "black" }} className="nav-container">
      <Navbar fixed="top" expand="md">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          LayarKaca98
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Tv Series
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Movie
            </Nav.Link>
            <Nav.Link href="#home" style={{ color: "white" }}>
              Drama
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{
                position: "absolute",
                display: "flex",
                right: "0",
                padding: "10px",
                color: "white",
                minWidth: "50px",
                textAlign: "center",
              }}
            />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search-input"
              style={{ backgroundColor: "#1b2430", borderStyle: "none", borderRadius: "20px" }}
            />
            {/* <Button
                style={{ backgroundColor: "#51557E", borderStyle: "none", marginLeft: "10px" }}
                >
                Search
              </Button> */}
          </Form>
        </Navbar.Collapse>
        {/* <FontAwesomeIcon icon={faCartShopping} size="lg" className="cart-icon" /> */}
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
