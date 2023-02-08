import { Container, Navbar, Nav } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            class="navBarIcon"
            src="https://storage.googleapis.com/wzukusers/user-31462805/images/5a56777688ab8M0N4zBG/Slide1_d400.GIF"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="auto">
            {/* <Nav.Link href="/ucrinformation">UCR Information</Nav.Link> */}
            <Nav.Link href="/testimonials">Customer Testimonials</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>

            {/* <NavDropdown title="My stuff" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Logout
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
