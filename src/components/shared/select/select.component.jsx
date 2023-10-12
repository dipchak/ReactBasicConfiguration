import {Form} from 'react-bootstrap';

import './select.component.css';
import { useState } from 'react';
function SelectComponent(props) {
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

      <Form.Select aria-label="Default select example">
        {/* <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option> */}
        {props.options.map((item, index)=>{
            return(
                <option value={item.value} key={index}>{item.label}</option>
            )
        })}

      </Form.Select>      


       {props.passwordHelpBlockMessage && (
            <Form.Text id={props.passwordHelpBlockID} muted>
                {props.passwordHelpBlockMessage}
            </Form.Text>
       )}
        
    </Form.Group>

    )
}

export default SelectComponent