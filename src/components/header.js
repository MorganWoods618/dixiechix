import {
    Container,
    Navbar,
    Nav,
  } from "react-bootstrap";

  const Header = () => {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Dixie Chix</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="auto">
              <Nav.Link href="/ucrinformation">UCR Information</Nav.Link>
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
  