import React, { Component } from 'react';
import './NavItem.css';


import { Navbar, Nav } from 'react-bootstrap';


// import Facebook from '../../../../images/facebook.png';
// import Linkedin from '../../../../images/linkedin.png';
// import { useHistory } from "react-router-dom";
import eventBus from "../../../../../Eventbus";
//import { withRouter } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink


//import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";



 const NavItem = ({ history, ...props }) => {

 
  const oncocntactclick = () => {
    if (window.location.pathname !== '/') {
      history.push('/')
      setTimeout(()=>{
        eventBus.dispatch("scrolltocontact", { message: "Scroll to contact" });
      },200)
    } else {
      eventBus.dispatch("scrolltocontact", { message: "Scroll to contact" });
    }
  }

  const onhowitworksclick = () => {
    if (window.location.pathname !== '/') {
      history.push('/')
      setTimeout(()=>{
        eventBus.dispatch("scrolltohowitworks", { message: "Scroll to scrolltohowitworks" });
      },200)
    } else {
      eventBus.dispatch("scrolltohowitworks", { message: "Scroll to scrolltohowitworks" });
    }
  }


    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="ul" className="mr-auto">
          <Nav.Item as="li">
            <Nav.Link href="/" >Home</Nav.Link>
          </Nav.Item>

          {/* <ScrollLink 
              to="howitwork" 
              spy={true} 
              smooth={true} 
              duration={500} 
              className='some-class' 
              activeClass='some-active-class'
            >
              HOW IT WORKS
            </ScrollLink>  */}

          <Nav.Item as="li">
            <Nav.Link href="javascript:void(0)" onClick={() => onhowitworksclick()} >HOW IT WORKS</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/Tvi-Marketing" >TVI MARKETING ACADEMY</Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link href="/pricing" >Memberships</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/affiliate" >BECOME AN AFFILIATE</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="javascript:void(0)" onClick={() => oncocntactclick()} >Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/faq" >Faqs</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item as="li">
            <Nav.Link href="/signup" >Sign up</Nav.Link>
          </Nav.Item> */}
          <Nav.Item as="li" className="d-flex align-items-center">
            <Nav.Link href="/signup" target='_blank' className="trial_button_nav" >GET A FREE 7-DAY TRIAL</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

    )



}
export default NavItem;













