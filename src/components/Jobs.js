import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Jobs.css';



function Jobs() {
  return (
    <div className="vcenter sectpad">
    <Container fluid="lg" >
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h1>Career</h1>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3 class="no-marg">Amazon</h3>
          <p class="no-marg">Software Development Engineer</p>
          <p >January '21 - Present</p>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
          <h3 class="no-marg">USAA</h3>
          <p class="no-marg">Software Engineer</p>
          <p >June '18 - January '21</p>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
        <h3 class="no-marg">AIG</h3>
        <p class="no-marg">Technology Analyst Intern</p>
        <p >June '17 - August '17</p>
        {/* <p>Where I work</p> */}
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col md={12} lg={{span: 10, offset: 1}} className="cont">
        <h3 class="no-marg">The Texas Higher Education Coordinating Board</h3>
        <p class="no-marg">Systems Support Specialist</p>
        <p >June '15 - August '15</p>
        {/* <p>Where I work</p> */}
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Jobs;
