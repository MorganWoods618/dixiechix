import { Container, Row, Col, Button } from "react-bootstrap";
import ContactForm from "../pages/contactPage";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col class="text-center py-3">
            {" "}
            Copyright &copy; Dixie Chix Reporting
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
