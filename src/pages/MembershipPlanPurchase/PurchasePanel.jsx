import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import PurchaseLeftPanel from './PurchaseLeftPanel'

import SignUp from '../signInUp/signUp'


function PurchasePanel() {
  return (
    <Container fluid>
      <div className='purchase'>
        <Row>
          <PurchaseLeftPanel></PurchaseLeftPanel>

          <Col md="8" className='mt-5 mb-5'>


<Tab.Container id="left-tabs-example" defaultActiveKey="first" fill>
          <Nav className="mb-3 nav-tabs nav-fill payment_process" as="ul">
            <Nav.Item as="li" class="d-flex justify-content-center">
              <Nav.Link eventKey="first" className='d-flex flex-column justify-content-center align-items-center'>
                <span className='step_number'>1</span>
                <span className='step_small_title mt-2'>STEP 1</span>
                <h3 className='h3_heading'>Sign Up</h3>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" class="d-flex justify-content-center">
              <Nav.Link eventKey="second" className='d-flex flex-column justify-content-center align-items-center'>
                <span className='step_number'>2</span>
                <span className='step_small_title mt-2'>STEP 2</span>
                <h3 className='h3_heading'>Payment</h3>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first" className='p-5'>
              <SignUp></SignUp>
            </Tab.Pane>
            <Tab.Pane eventKey="second" className='p-5'>Second tab content</Tab.Pane>
          </Tab.Content>
</Tab.Container>

          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default PurchasePanel