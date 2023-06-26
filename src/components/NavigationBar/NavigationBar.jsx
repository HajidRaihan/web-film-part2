import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <Container fluid style={{ backgroundColor: "black" }}>
      <Navbar>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Perbelanjaan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Kategori
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="search-input"
                style={{ backgroundColor: "1B2430", borderColor: "grey" }}
              />
              <Button
                style={{ backgroundColor: "#51557E", borderStyle: "none", marginLeft: "10px" }}
              >
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        {/* <FontAwesomeIcon icon={faCartShopping} size="lg" className="cart-icon" /> */}
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
