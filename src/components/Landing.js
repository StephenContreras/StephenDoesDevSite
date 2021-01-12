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
            <div className="name-div cont" >
              <p>Hi I'm</p>
              <h2>Stephen Contreras</h2>
            </div>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 5, order: 2}}>
              <img id='profilepic' src={me} alt="Stephen Contreras"></img>
            </Col>
          </Row>
          <Row >
            <Col md={12} lg={{span: 10, offset: 1}} className="cont">
            <div>
              <p>I’m a software engineer that specializes in designing and creating process automation and a graduate student is diving into just about everything else. From creating efficient and auditable systems to implementing deep networks and creating software parallel systems I strive to continuously learn and write good software. </p>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
    }
}

export default Landing;
