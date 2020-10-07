import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Landing.css';
import me from '../img/me.png'


class Landing extends React.Component {
  render(){
      return (
        <div id="ldBd" className="ld-body vcenter">
        <Container fluid="lg"  >
          <Row>
            <Col xs={{span: 12, order: 2}} md={{span: 5, offset: 1, order: 1}}>
            <div className="name-div" >
              <p>Hi I'm</p>
              <h2>Stephen Contreras</h2>
            </div>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 5, order: 2}}>
              <img id='profilepic' src={me} alt="photo of stephen"></img>
            </Col>
          </Row>
          <Row >
            <Col md={12} lg={{span: 10, offset: 1}} className="cont">
            <div>
              <p>I'm a software engineer and graduate student currently located in Dallas, Texas.</p>
              <p>I specialize in creating automation for processes and systems in operations. Whether it be an app or API, CLI or CICD, I work to make things faster and easier.</p>
            </div>
            </Col>
          </Row>
          {/* <Row>
            <Col md={12} lg={{span: 10, offset: 1}} className="ld-cont">
            <div>
              <p>Find me on the web:</p>
              <p><a href="https://github.com/stephencontreras" target="_blank">GitHub</a> <a href="https://linkedin.com/stephencontreras" target="_blank">LinkedIn</a> <a href="https://twitter.com/stephendoesdev" target="_blank">Twitter</a> <a href="https://dev.to/stephencontreras" target="_blank">Dev.to</a> </p>
            </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
    }
}

export default Landing;
