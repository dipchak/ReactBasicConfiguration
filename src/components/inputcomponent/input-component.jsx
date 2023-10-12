import {Form} from 'react-bootstrap';
import './input-component.css'

import React, { useState } from 'react';

function InputComponent() {

  const [count, setCount] = useState(0);

  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
      
      
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>

      
    </Form.Group>
  )
}

export default InputComponent