import { Container, Row, Button } from "react-bootstrap";
import "./homePage.css";

const TestimonialsPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
        <p className="subTitle"> </p>
          <div className="card maincard text-white mb-3">
            <div className="card-header">Customer Testimonials</div>
            <div className="card-body">
              <h4 className="card-title">Bryce Christensen Excavating, Inc</h4>
              <p className="card-text">
                "Dixie Chix Reporting has made the management of our fleet a
                breeze. We no longer need to make several trips back and forth
                to Hurricane to renew, alter, or add vehicles. My requests are
                usually handled same day through an email. We save countless
                hours of time, money, and inconvenience by having Dixie Chix
                Reporting assist us. In fact, we have not had to travel to the
                DMV since Dixie Chix has opened. They are valued resource to us
                and are easy to contact and can answer all of our DOT
                questions."
              </p>
              <h4 className="card-title">Coughlin Company I, Inc.</h4>
              <p className="card-text">
                "Dixie Chix is a lifesaver! They have saved our company money
                with our registration and filings and more importantly saved me
                time! Sandra and Kelly are both very knowledgeable and a great
                resource. If they don't know the answer they get it but most
                always they just know! I'd be lost without them and their expert
                help. Totally recommend them for any business big or small. They
                more than earn their fees. You will end up saving money in the
                end."
              </p>
              <h4 className="card-title"> Tradestar Energy</h4>
              <p className="card-text">
                "I am so pleased with the work Dixie Chix Reporting has done for
                our company!! They always get tasks done in a timely manner
                saving us money, time and headaches. They are very knowledgeable
                with everything they do. They are amazing and fun to work with.
                I have referred several companies to them and have only heard
                awesome feedback and a bunch of thank yous for referring then to
                Dixie Chix. They truly are a life saver and we would recommend
                any company to rely on them! Thanks Dixie Chix for all you do
                for us!"
              </p>
            </div>
          </div>          
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialsPage;
