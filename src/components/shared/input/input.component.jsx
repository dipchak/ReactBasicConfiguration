import {Form} from 'react-bootstrap';

import './input.component.css';
import { useState } from 'react';
function InputComponent(props) {
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

      <Form.Control required={props.required} onChange={inputChange} placeholder={props.placeholder} title={props.title} type={props.type} className={props.cName} value={input} id={props.id} aria-describedby={props.passwordHelpBlock} />
      
       {props.passwordHelpBlockMessage && (
            <Form.Text id={props.passwordHelpBlockID} muted>
                {props.passwordHelpBlockMessage}
            </Form.Text>
       )}
        
    </Form.Group>

    )
}

export default InputComponent