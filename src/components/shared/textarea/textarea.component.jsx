import {Form} from 'react-bootstrap';

import './textarea.component.css';
import { useState } from 'react';
function TestareaComponent(props) {
    const [input, setInput] = useState(props.value);
    const inputChange = (event) => {
        setInput(event.target.value);
        // if(props.change) {
        //     props.change(event.target.value);
        // }
    }
    return (

    <Form.Group className={props.FGcName} controlId="exampleForm.ControlInput1">
      <Form.Label htmlFor="inputPassword5">{props.label} <span>{props.required && `*`}</span></Form.Label>

      {/* <Form.Control required={props.required} onChange={inputChange} placeholder={props.placeholder} title={props.title} type={props.type} className={props.cName} value={input} id={props.id} aria-describedby={props.passwordHelpBlock} /> */}
      
      <Form.Control

          required={props.required}
          as={props.type}
          title={props.title}
          placeholder={props.placeholder}
          
          className={props.cName} 
          value={input} 
          id={props.id} 
          aria-describedby={props.passwordHelpBlock} 
          style={{ height: '100px' }}
        />



       {props.passwordHelpBlockMessage && (
            <Form.Text id={props.passwordHelpBlockID} muted>
                {props.passwordHelpBlockMessage}
            </Form.Text>
       )}
        
    </Form.Group>

    )
}

export default TestareaComponent