
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './signinup.css';
import logo from '../../images/logo.png'

//import InputComponent from '../../components/inputcomponent/input-component';

import EmailInputComponent from '../../components/hocs/email-input/email-input.component';
import PasswordInputComponent from '../../components/hocs/password-input/password-input.component';
import InputComponent from '../../components/shared/input/input.component';



function signIn() {
  return (
    <Container>
        <div className='sign_body mt-5 mb-5'>
            <Row className='ms-0 me-0'>
                <Col md={6} className='signInUp_LeftPane d-flex align-items-center justify-content-center'>
                    <div className='d-flex'>
                        <Col md={12}>
                            <img alt='business-live-global' src={logo}/>
                            <h2 className='text-center mt-4 mb-4'>How it works?</h2>
                            <ul>
                                <li>We will received eco-friendly tips and resources for sustainable living.</li>
                                <li>We will received eco-friendly tips and resources for sustainable living.</li>
                                <li>We will received eco-friendly tips and resources for sustainable living.</li>
                                <li>We will received eco-friendly tips and resources for sustainable living.</li>
                            </ul>

                            <h3>Proceed to Login -></h3>

                        </Col>
                    </div>

                </Col>
                <Col md={6} className='signInUp_RightPane d-flex flex-column align-items-center justify-content-center'>
                        
                        <h3 className='h3_heading  pb-4'>Sign In</h3>
                        
                        <Form className='loginForm'>

                            <EmailInputComponent use={InputComponent} cls={"col-md-12 mb-3"} title={"Email"} Pholder={"Enter your Email"} required={'required'}></EmailInputComponent>
                            <PasswordInputComponent use={InputComponent} cls={"col-md-12 mb-3"} title={"Password"} Pholder={"Enter your Password"} required={'required'}></PasswordInputComponent>
                            <Col md={12} className='d-flex justify-content-end forgot_pass'><strong><a href='#'>Forgot Password?</a></strong></Col>
                            <Button className="bgl_button">Login</Button>
                        </Form>    
                        
                        <Col md={12} className='d-flex justify-content-center forgot_pass mt-4'><strong>New to this site? <a href='/Purchasepanel'>Sign Up</a></strong></Col>

                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default signIn