import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/Landing'
import About from './components/About'
import Jobs from './components/Jobs'
import Schools from './components/Schools'
import './App.css';
import './components/mysvg.css'
import ReactGA from 'react-ga';

import MySvg from './components/mysvg'

const trackingId = "UA-180094663-1";
ReactGA.initialize(trackingId);

// window.addEventListener('scroll', e => {
//   // if(x != null && !x.classList.contains(classes[Math.round(window.scrollY / height) % classes.length])){
//   //   console.log(Math.floor(window.scrollY / height) % classes.length);
//   //   x.classList.add(classes[Math.round(window.scrollY / height) % classes.length]);
//   //   x.classList.remove(...classes.filter((n)=>n != classes[Math.round(window.scrollY / height) % classes.length]));
//   // }
//   this.idx = window.scrollY/500
// });

const classes = ['bg1', 'bg2', 'bg3', 'bg4']

var lnd = null;
var abt = null;
var jbs = null;
var sch = null;

class App extends React.Component {


  constructor() {
    super()
    this.state = {
      idx: -1
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    console.log('called!')
    let vals = [Math.abs(lnd.getBoundingClientRect().top),
      Math.abs(abt.getBoundingClientRect().top),
      Math.abs(jbs.getBoundingClientRect().top),
      Math.abs(sch.getBoundingClientRect().top)]
      let newIdx = vals.indexOf(Math.min.apply(Math, vals))
    if(newIdx !== this.state.idx){
      this.setState({
        idx: newIdx
      })
    }
  }

  componentDidMount() {
    document.body.classList.add('bg1');
    window.addEventListener('scroll', this.handleScroll, true);
    lnd = document.getElementById("lnd");
    abt = document.getElementById("abt");
    jbs = document.getElementById("jbs");
    sch = document.getElementById("sch");
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  render(){
      document.body.classList.add(classes[this.state.idx % classes.length]);
      document.body.classList.remove(...classes.filter((n)=>n !== classes[this.state.idx % classes.length]));
      document.body.classList.add('trans');
      return (
      <div id='mainApp' className="App green-yellow">
        <MySvg {...this.state} ></MySvg>
        <div id="lnd">
          <Landing id="lnd" ></Landing>
        </div>
        <div id="abt">
          <About ></About>
        </div>
        <div id="jbs">
          <Jobs></Jobs>
        </div>
        <div id="sch">
          <Schools></Schools>
        </div>
        {/* <Container fluid="lg">
          <Row>
            <Col md={12} lg={{span: 10, offset: 1}}>
            </Col>
          </Row>
        </Container> */}
      </div>
    );
    }
}

export default App;
