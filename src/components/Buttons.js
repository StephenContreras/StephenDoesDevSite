import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import '../App.css';

function Buttons(props) {
  return (
    
    <div>
        {props.links.map((link, index)=> (
        <Button variant="light" className="uniform" href={link.url} key={index}>{link.text}</Button>
        ))}
    </div>
          
  );
}

export default Buttons;
