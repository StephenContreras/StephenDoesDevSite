import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class DynamicText extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            texts: props.TextInfo,
            currentIdx:0
        };
        this.BgColor = this.BgColor.bind(this);
        this.TxtColor = this.TxtColor.bind(this);
    }

    BgColor(){
        return this.state.texts[this.state.currentIdx].bgcolor
    }

    TxtColor(){
        return this.state.texts[this.state.currentIdx].txtcolor
    }

    render() {
    return (
        <Container fluid="lg"> 
            {this.state.texts.map((t, i)=> (
            <Button variant="light"
                style={{backgroundColor:this.BgColor(), color:this.TxtColor()}}
                onClick={() => this.setState({currentIdx:i})} 
                key={i}>
                     {t.title}
            </Button>
            ))}
            <Row className="row-with-gap" noGutters>
                <Col md={12} lg={{span: 10, offset: 1}}>
                    <div className="large-title" style={{backgroundColor:this.BgColor(), color:this.TxtColor()}}>
                        <h2>{this.state.texts[this.state.currentIdx].title}</h2>
                    </div> 
                </Col>
            </Row>
            <Row className="row-with-gap">
                <Col md={12} lg={{span: 10, offset: 1}}>
                <div className="text-box" >
                    {this.state.texts[this.state.currentIdx].text.map((par,idx) => <p key="idx">{par}</p>)} 
                </div>
                </Col>
            </Row>
        </Container>    
        )   
    }
}

export default DynamicText 