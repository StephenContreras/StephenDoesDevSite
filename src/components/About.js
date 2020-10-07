import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css';



function About() {
  return (
    <div className="vcenter">
      <Container fluid="lg" >
        <Row>
          <Col md={12} lg={{span: 10, offset: 1}} className="cont">
            <h1>About Me</h1>
            <p>Just some stuff about me! ❤</p>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={12} lg={{span: 10, offset: 1}} className="cont">
            <p>Find me on the web!</p>
            <p>LinkedIn GitHub Dev.to Twitter</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
