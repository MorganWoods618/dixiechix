import { Container, Row, Button } from "react-bootstrap";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Dixie Chix Reporting</h1>
              <p className="subTitle">"May every road lead you home"</p>
            </div>
          </div>

          <div className="card maincard text-white mb-3">
            <div className="card-header">Our Services</div>
            <div className="card-body">
              <h4 className="card-title">Filing Your UCR</h4>
              <p className="card-text">
                As an interstate motor carrier, you will need to update your UCR
                registration before the deadline of Dec 31, 2018. By filing
                ahead of the deadline, you'll avoid risking a fine in each state
                you drive - which can exceed $300 per violation. Dixie Chix
                Reporting can take care of it for you now. All you need to do is
                answer a couple of simple questions and we’ll take care of the
                rest!
              </p>
              <h4 className="card-title">Additional Services</h4>
              <p className="card-text">
                <li>Oversize/Overweight permit</li>
                <li>Plate/decal replacement</li>
                <li>MCS-150/DOT filing</li>
                <li>IRS 2290 prep/filing</li>
                <li>IFTA filing and renewals</li>
                <li>IRP fleet additions, deletions, and renewals</li>
                <li>IRP Vehicle Titling</li>
                <li>Idaho trailer plating</li>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
