import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Jobs.css';



function Jobs() {
  return (
    <div className="vcenter">
    <Container fluid="lg" >
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h1>Career</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3>USAA</h3>
          <p>Where I work</p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3>AIG</h3>
          <p>Where I last interned</p>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3>THECB</h3>
          <p>Where I first interned</p>
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Jobs;
