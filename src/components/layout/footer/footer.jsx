import React from 'react'

import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';


import footerlogo from '../../../images/footer_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPenNib } from '@fortawesome/free-solid-svg-icons'
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'



function footer() {
  return (

<footer className="footer">
        <div className="footer_top">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="footer_left_partts">
                            <div className="footer_logo">
                                <img src={footerlogo}/>
                            </div>
                            <div className="footer_social_iconss">
                                <ul>

                                   

                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="menu_footer_sec">
                            <h2>Menu</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Membership</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Business Growth Services</a></li>
                                <li><a href="#">Business Live Global Media</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="footer_bottom">
            <Container>
                <div className="footer_inner_bottom">
                    <p>&copy; Copyright @2023. All Rights Reserved.</p>
                    <div className="footer_right_ul">
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    </footer>







  )
}

export default footer