import React, { Component } from 'react';
import './NavItem.css';

import { Navbar, Nav } from 'react-bootstrap';

import rightArrow from '../../../../../images/up_arrow.png';
import services from '../../../../../images/services.png';
import signupUser from '../../../../../images/signup_user.png';
import toggleBar from '../../../../../images/bar.png';


// import Facebook from '../../../../images/facebook.png';
// import Linkedin from '../../../../images/linkedin.png';
// import { useHistory } from "react-router-dom";
import eventBus from "../../../../../Eventbus";
//import { withRouter } from 'react-router-dom';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink


//import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";



 const NavItem = ({ history, ...props }) => {


  const openOverlay = ()=> {
    document.getElementById("_overlay").style.height = "100%";
    document.getElementById("_overlay").style.top = "0";
    //console.log("clicked Open");
  }
  
  const closeOverlay = ()=> {
    document.getElementById("_overlay").style.height = "0%";
    document.getElementById("_overlay").style.top = "-400px";
    //console.log("clicked X");
  }


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
      // <Navbar.Collapse id="basic-navbar-nav">
      //   <Nav as="ul" className="mr-auto">
      //     <Nav.Item as="li">
      //       <Nav.Link href="/" >Home</Nav.Link>
      //     </Nav.Item>

      //     {/* <ScrollLink 
      //         to="howitwork" 
      //         spy={true} 
      //         smooth={true} 
      //         duration={500} 
      //         className='some-className' 
      //         activeclassName='some-active-className'
      //       >
      //         HOW IT WORKS
      //       </ScrollLink>  */}

      //     <Nav.Item as="li">
      //       <Nav.Link href="javascript:void(0)" onClick={() => onhowitworksclick()} >HOW IT WORKS</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item as="li">
      //       <Nav.Link href="/Tvi-Marketing" >TVI MARKETING ACADEMY</Nav.Link>
      //     </Nav.Item>

      //     <Nav.Item as="li">
      //       <Nav.Link href="/pricing" >Memberships</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item as="li">
      //       <Nav.Link href="/affiliate" >BECOME AN AFFILIATE</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item as="li">
      //       <Nav.Link href="javascript:void(0)" onClick={() => oncocntactclick()} >Contact</Nav.Link>
      //     </Nav.Item>
      //     <Nav.Item as="li">
      //       <Nav.Link href="/faq" >Faqs</Nav.Link>
      //     </Nav.Item>
      //     {/* <Nav.Item as="li">
      //       <Nav.Link href="/signup" >Sign up</Nav.Link>
      //     </Nav.Item> */}
      //     <Nav.Item as="li" className="d-flex align-items-center">
      //       <Nav.Link href="/signup" target='_blank' className="trial_button_nav" >GET A FREE 7-DAY TRIAL</Nav.Link>
      //     </Nav.Item>
      //   </Nav>
      // </Navbar.Collapse>


                    <div className="upcoming_events">
                        <div className="upcoming_events_menu">
                            <ul className="upcoming_events_listing">
                                <li className="up_events"><a href="#">UPCOMING EVENTS <img className='pe-0' alt="rightarrow" src={rightArrow}/></a>
                                </li>

                                <li className="login_link up_events"><a href="/membership"> <img className='ps-0' alt="service" src={services}/> Services</a></li>
                                <li className="sign_link up_events"><a href="/signin"><img className='ps-0' alt="signupUser" src={signupUser}/> Membership</a></li>
                            </ul>
                            <div className="menu d-flex align-items-center">
                                <button id="openMenuBtn" onClick={openOverlay}><img className='pe-2' alt="mav_toggle" src={toggleBar}/>
                                    Menu</button>
                            </div>


                            <div className="overlay" id="_overlay">
                                <div className="d-flex justify-content-end">
                                    <button className="closebtn" onClick={closeOverlay}>&times;</button>
                                </div>
                                <div className="overlay-wrapper">
                                    <div className="overlay-content">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About Us</a>
                                                <ul>
                                                    <li><a href="#">Our Story</a></li>
                                                    <li><a href="#">Partners</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/membership">Membership</a></li>

                                            <li><a href="#">Events</a>
                                                <ul>
                                                    <li><a href="#">Online</a></li>
                                                    <li><a href="#">Live</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Business Growth Services</a>
                                                <ul>
                                                    <li><a href="#">BLG Growth Packages</a></li>
                                                    <li><a href="#">BLG Event Creation and Promotion</a></li>
                                                    <li><a href="#">BLG Media Packages</a></li>
                                                    <li><a href="#">BLG Funding Solutions</a></li>
                                                    <li><a href="#">BLG Legal</a></li>
                                                    <li><a href="#">BLG Tender Writing</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Business Live Global Media</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li className="upcoming_evnt"><a href="#">Upcoming Events</a></li>
                                            <li className="upcoming_evnt"><a href="#">Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>








    )



}
export default NavItem;













