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
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3>UT Austin</h3>
          <p>It's where I go</p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3>Texas A&amp;M</h3>
          <p>It's where I went</p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Schools;
