import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Buttons from './components/Buttons'
import Button from 'react-bootstrap/Button'
import './App.css';
import Links from './contents/links'
import AboutMe from './contents/aboutMe'
import Texts from './contents/texts'
import DynamicText from './components/DynamicText'
import { Link  } from 'react-scroll';


function App() {
  return (
    <div className="App">
      
      <Container fluid="lg">
        <Row className="row-with-gap" noGutters>
          <Col md={12} lg={{span: 10, offset: 1}}>
          <div className="large-title">
            <h1>Stephen Contreras</h1>
          </div>
          </Col>
        </Row>
          <Row className="row-with-gap">
            <Col md={12} lg={{span: 10, offset: 1}}>
            <div className="text-box">
              {AboutMe.title !== "" && 
                  <h3>{AboutMe.title}</h3>
              }
              <p>{AboutMe.text}</p>
              </div>
            </Col>
          </Row>
        <Row>
          <Col>
            <Buttons links={Links}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link
              activeClass="active"
              to="moreInfo"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
                <Button variant="light" >More information</Button>
              </Link>
          </Col>
        </Row>

      </Container>

      
      <div id="moreInfo">
      <DynamicText TextInfo={Texts} ></DynamicText>
      </div>
    </div>
  );
}

export default App;
