
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Container,Col,Row} from 'react-bootstrap'
import rainbow from '../images/rainbow.jpg';
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <>
    <Container fluid className="about-section">
  <Container>
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
           Who <strong className="purple">I AM</strong>
        </h1>
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                    Hello Fellow Humans! I'm <span className="purple">Chrissie Sparling</span>
                    from <span className="purple"> Federal Way, Washington.</span>
                    <br />I love making people happy.
                    <br />
                    <br />
                    Apart from coding, You will find me on the DiscGolf course or doing one of the following.
                </p>
                <ul>
                    <li className="about-activity">
                    <ImPointRight /> Family Time, The Best Part of my Day!
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Art work- Dream Catchers, moonCatchers, Drums, Jewelry, steam-punk art
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Playing D and D with one of my favorite people in the world..my husband Scott.
                    </li>
                </ul>

               
                </blockquote>
            </Card.Body>
        </Card>
      </Col>
      <Col
        md={5}
        style={{ paddingTop: "120px", paddingBottom: "50px" }}
        className="about-img"
      >
        <img src={rainbow} alt="about" className="img-fluid" />
      </Col>
    </Row>
    <h1 className="project-heading">
      Professional <strong className="">Skillset </strong>
    </h1>

    {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <DiJavascript1 />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiNodejs />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiReact />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiMongodb />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiMysql />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiGit />
  </Col>
</Row> */}

    {/* <h1 className="project-heading">
      <strong className="purple">Tools</strong> I use
    </h1>
    
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
    Days I <strong className="purple">Code</strong>
  </h1>
  <GitHubCalendar
    username="chrissiesparling"
    blockSize={15}
    blockMargin={5}
    theme={colourTheme}
    fontSize={16}
  />
</Row> */}
  </Container>
</Container>
    </>


);
}