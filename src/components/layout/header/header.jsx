//import React, { Component } from 'react';
import React from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap';

import Navitem from './Nav/NavItem/NavItem';
import './header.css';

import logo from '../../../images/logo.png'


function header() {
  return (
    



<header className="header">
        <Container fluid>
            <div className="inner_header">
                <div className="header_top">
                    <div className="logo">
                        <img alt="business-live-global-logo" src={logo}/>
                    </div>
                    <Navitem />

                    </div>
            </div>
        </Container>
    </header>


        // {/* <Navbar bg="light" expand="lg" fixed="top" variant="dark">
        //   <Container>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />


        //     <Navitem />
        //   </Container>
        // </Navbar> */}






  )
}

export default header