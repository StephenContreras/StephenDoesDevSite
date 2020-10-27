import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css';

import LinkedIn from '../img/linkedin.svg'
import GitHub from '../img/github.svg'
import DevTo from '../img/dev_to.svg'
import Twitter from '../img/twitter.svg'

function About() {
  return (
    <div className="vcenter">
      <Container fluid="lg" >
        <Row>
          <Col md={12} lg={{span: 10, offset: 1}} className="cont">
            <h1>About Me</h1>
            <p>I’m a software engineer that specializes in designing and creating process automation and a graduate student that is diving into just about everything else. From creating efficient and auditable systems to implementing deep networks and creating software parallel systems I strive to continuously learn and write good software. </p>
            <p>I’m also currently enrolled at The University of Texas at Austin pursuing a Master’s of Science in Computer Science. I’ve been able to dive into nifty topics like machine learning and advanced operating system design. It’s given me the opportunity to dabble in new topics and gain novel perspectives on the structure and implementation of various code stacks. </p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12} lg={{span: 10, offset: 1}} className="cont cent">
            <h5>Find me on the web!</h5>
            <div className="extLink">
              <a href="https://www.linkedin.com/in/stephencontreras/" target="_blank" rel="noopener noreferrer">
                <img className="icon" alt="LinkedIn logo" src={LinkedIn} ></img>
              </a>
            </div>
            <div className="extLink">
              <a href="https://www.github.com/stephencontreras/" target="_blank" rel="noopener noreferrer">
                <img className="icon" alt="GitHub logo" src={GitHub} ></img>
              </a>
            </div>
            <div className="extLink">
              <a href="https://www.dev.to/stephencontreras/" target="_blank" rel="noopener noreferrer">
                <img className="icon" alt="Dev.to logo"  src={DevTo} ></img>
              </a>
            </div>
            <div className="extLink">
              <a href="https://www.twitter.com/stephendoesdev" target="_blank" rel="noopener noreferrer">
                <img className="icon" alt="twitter logo" src={Twitter} ></img>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
