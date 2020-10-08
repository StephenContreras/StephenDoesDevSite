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
          <h3 class="no-marg">USAA</h3>
          <p class="no-marg">Software Engineer</p>
          <p >June '18 - present</p>
          {/* <ul>
            <li>Designed and Implemented system level automation for software drift reporting and management</li>
            <li>Optimized legacy code for better performance with uneven server capacities</li>
            <li>Refactored products for continuous integration and deployment in an active active environment</li>
            <li>Coordinated department training and for new hires in collaboration with multiple teams</li>
            <li>Organized department meetings for input and represented team in executive feedback meetings</li>
          </ul> */}
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
