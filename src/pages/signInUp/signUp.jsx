import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import TextInputComponent from '../../components/hocs/text-input/text-input.component';
import EmailInputComponent from '../../components/hocs/email-input/email-input.component';
import PasswordInputComponent from '../../components/hocs/password-input/password-input.component';
import TextAreaComponent from '../../components/hocs/textarea-input/text-area.component';
import SelectInputComponent from '../../components/hocs/select-input/select-input.component';

import InputComponent from '../../components/shared/input/input.component';
import TestareaComponent from '../../components/shared/textarea/textarea.component';
import SelectComponent from '../../components/shared/select/select.component';



import './signinup.css';

function SignUp() {
  return (
    <Form className='loginForm'>
      <Row className="mb-3">
        <TextInputComponent use={InputComponent} cls={"col-md-6 mb-3"} title={"Name"} Pholder={"enter your name"} required={'required'}></TextInputComponent>
        <EmailInputComponent use={InputComponent} cls={"col-md-6 mb-3"} title={"Email"} Pholder={"Enter your email"} required={'required'} ></EmailInputComponent>        
        <TextAreaComponent use={TestareaComponent} cls={"col-md-12 mb-3"} title={"Address"} Pholder={"Enter your adddress"} required={'required'}></TextAreaComponent>
        

    <Form.Group className="col-md-6 phone" controlId="exampleForm.ControlInput1">
      <Form.Label htmlFor="inputPassword5">Phone Number <span>*</span></Form.Label>

      <PhoneInput
            country="in"
            onlyCountries= {['in','cu','cw','kz']}
            label="teste"
            inputClass="teste"
            specialLabel=""
            inputProps={{
              //name: 'phone',
              required: true,
              //autoFocus: true,
            }}
        />
      

        
    </Form.Group>


        <TextInputComponent use={InputComponent} cls={"col-md-6 mb-3"} title={"City"} Pholder={"Enter your city"} required={'required'}></TextInputComponent>
        <TextInputComponent use={InputComponent} cls={"col-md-6 mb-3"} title={"State"} Pholder={"Enter your state"} required={'required'}></TextInputComponent>

        <SelectInputComponent use={SelectComponent} cls={"col-md-6 mb-3"} title={"Country"} Pholder={"Enter your state"} required={'required'} options={[
          {value:"", label:"Select your country"},
          {value:"IN", label:"India"},
          {value:"PAK", label:"Pakistan"}
        ]}></SelectInputComponent>

        <PasswordInputComponent use={InputComponent} cls={"col-md-6 mb-3"} title={"Password"} Pholder={"Enter your password"} required={'required'}></PasswordInputComponent>
        <PasswordInputComponent use={InputComponent} cls={"col-md-6 mb-3"} title={"Confirm Password"} Pholder={"Enter your confirm password"} required={'required'}></PasswordInputComponent>
        
        
        <Row className='justify-content-between mt-3'>
          <Col md={4} className='d-flex justify-content-end forgot_pass'>
            <Button className="bgl_button mt-0">Continue</Button>
          </Col>

          <Col md={6} className='d-flex justify-content-end align-items-center forgot_pass'>
            <strong>Already a Member? <a href='/signin'>Sign in</a></strong>
          </Col>
        </Row>
        
        
      </Row>  
    </Form>
  )
}

export default SignUp