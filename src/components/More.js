import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './More.css';



function More() {
  return (
    <div className="mr-body">
      
      <Container fluid="lg" >
        <Row>
          <Col md={12} lg={{span: 10, offset: 1}}>
          <div className="desk-padding">
            <h1>Stephen Contreras</h1>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default More;
