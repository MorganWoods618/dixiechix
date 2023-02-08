import { Container, Row, Button } from "react-bootstrap";
import "./homePage.css";
import ContactForm from "../pages/contactPage";

const HomePage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <img
                class="logo"
                src="https://storage.googleapis.com/wzukusers/user-31462805/images/5a56777688ab8M0N4zBG/Slide1_d400.GIF"
              />
              <p className="subTitle">"May every road lead you home"</p>
            </div>
          </div>

          <div className="card maincard text-white mb-3">
            <div className="card-header">About Us</div>
            <div className="card-body">
              <h4 className="card-title">We want to keep you on the road</h4>
              <p className="card-text">
                Here at Dixie Chix we Reporting we want to keep you on the road
                by reducing your risk of fines, delays and the cost of temporary
                permits due to missed deadlines. We can assist in obtaining
                multiple types of permits to fit your needs, as well as renewals
                and getting titles for your fleet.
              </p>
            </div>
          </div>

          <div className="card maincard text-white mb-3">
            <div className="card-header">Our Services</div>
            <div className="card-body">
              <h4 className="card-title">Filing Your UCR</h4>
              <p className="card-text">
                As an interstate motor carrier, you will need to update your UCR
                registration before the deadline of Dec 31, 2023. By filing
                ahead of the deadline, you'll avoid risking a fine in each state
                you drive - which can exceed $300 per violation. Dixie Chix
                Reporting can take care of it for you now. All you need to do is
                answer a couple of simple questions and we’ll take care of the
                rest!
              </p>
              <p className="card-text">
                If you have trucks registered over 55,000 lbs, we can now
                Pre-file your 2022 – 2023 2290 returns, which will be processed
                by the IRS by the first week of July and Schedule 1 copy for the
                same will be emailed to you as soon as the IRS accepts your
                return. Starting 6/1/18
              </p>
              <h4 className="card-title">Additional Services</h4>
              <p className="card-text">
                <li>Oversize/Overweight permit</li>
                <li>Plate/decal replacement</li>
                <li>MCS-150/DOT filing</li>
                <li>IRS 2290 prep/filing</li>
                <li>IFTA filing and renewals</li>
                <li>Idaho trailer plating</li>
                <li>
                  Manage your IRP requirements – from registration thru renewal
                </li>
                <li>IRP fleet additions and deletions</li>
                <li>
                  Obtain base plates for your existing fleet or any new
                  equipment
                </li>
                <li>
                  Manage other required jurisdictional credentials for you and
                  your fleet
                </li>
              </p>
            </div>
          </div>
          <Button className="contactButton" href="/contactus">
            Contact Us
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
