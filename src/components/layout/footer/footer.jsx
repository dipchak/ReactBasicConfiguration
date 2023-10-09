import React from 'react'

import './footer.css';
// import maxlinefooter from '../images/maxline-footer.png';
// import workdmap from '../images/world_map_footer.png';
//import { Container, Row, Col } from 'bootstrap-4-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Facebook from '../../images/facebook.png';
// import Linkedin from '../../images/linkedin.png';




function footer() {
  return (
    <div className="footer">        
    <div className="copyright pt-3">
      <Container>
        <Row>
          <Col md="4"></Col>
          {/* <Col md="4" className="text-center d-flex flex-column align-items-center">
            <ul className="social d-flex justify-content-center">
              <li className="mr-2"><a href="https://www.facebook.com/tripvaletincentives" target='blank'  className="facebook"><img src={Facebook} className="img-fluid"/></a></li>
              <li className="ml-2"><a href="https://www.instagram.com/accounts/login"  target='blank'  className="instagram"><img src={Linkedin} className="img-fluid"/></a></li>
            </ul>                                
          
            &copy; 2021 TRIPVALET INCENTIVES</Col> */}
          <Col md="4" className="address text-left">
              4901 W 136th Suite #17<br/>Leawood, KS  66224 <br/>
              <a href="mailto:support@tripvaletincentives.com" target="_self">support@tripvaletincentives.com</a><br/>
              Tel:  800-816-2467
          </Col>
        </Row>
      </Container></div>
  </div>
  )
}

export default footer