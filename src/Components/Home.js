import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row,Col,Image} from 'react-bootstrap'
import Type from './Type'
import snoqualmieFalls from '../images/snoqualmieFalls.jpg';
import meG from '../images/meG.jpg';
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
function Home(){
    return(
        <>
        <Container fluid className="home-section ">
        <Container >
        <Row>
            <Col>
                <h2>
                <strong className="main-name"> Chrissie Sparling</strong>
                </h2>

                <Type />
            </Col>
            <Col>
                <Image src={meG} /> 
            </Col>
        </Row>
        <br/>  
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </Container>
        <Container >
            <Row>
                <Col>
                <Tilt>
                    <Image src={snoqualmieFalls}/>
                </Tilt>
                </Col>
                <Col>
                    <Row className="text-center">                      
                        <h1>ALLOW ME TO INTRODUCE MYSELF</h1>                    
                    </Row>
                    <br/>
                    <Col>
                    <h5>I am tribal! Native to the Pacific NorthWest. More accurately, Snoqualmie Tribal Citizen! I believe in family. Family is so important to my life. It keeps me gronded and well balanced. I married my HighSchool Sweetheart after we graduated college. Then we waited for a few years and before embracing family life. Proud Mother of two amazing kids ages 23 and 18. During this pandemic, I got the opportunity to go back to school and now I am almost a certified web developer and with these skills...I plan to change the world one View at a time.</h5> 
                    </Col>
                    <br/>
                    <Col>
                    <h5>My goals will always lead me to more education. Knowledge is the key to all understanding and I want to unlock as much as I possibly can in this life time. </h5> 
                    </Col>
                    <br/>
                </Col>
            </Row>
        </Container>
        <Container className="d-flex inline">
        <Row>
          <Col className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chrissiesparling"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chrissie-sparling"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
            
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/wizard5874/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </Container>
        </Container>
        </>
    );
}

export default Home