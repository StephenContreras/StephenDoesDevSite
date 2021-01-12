import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Schools.css';



function Schools() {
  return (
    <div className="vcenter">
    <Container fluid="lg" >
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h1>Education</h1>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
        <h3 class="no-marg">The University of Texas at Austin</h3>
          <p class="no-marg">Master of Science in Computer Science</p>
          <p >expected December 2021</p>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3 class="no-marg">Texas A&amp;M University</h3>
          <p class="no-marg">Bachelor of Science in Computer Engineering</p>
          <p >cum laude</p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Schools;
