//import React, { Component } from 'react';
import React from 'react'

import { Navbar } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';

import Navitem from './Nav/NavItem/NavItem';
import './header.css';



function header() {
  return (
    

    <div className="header">


        <Navbar bg="light" expand="lg" fixed="top" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navitem />
          </Container>
        </Navbar>


    </div>



  )
}

export default header