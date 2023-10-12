import {Form} from 'react-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./PurchasePanel.css"

function PurchaseLeftPanel() {
  return (
    <Col md="4" className="PurchaseLeftPanel p-5">
      <h3 className="h3_heading mb-3">Membership Plans</h3>
      <h4 className='h4_heading mb-4'>You selected - BLG - GOLD BUSINESS GROWTH PACKAGE  </h4>
        <ul class="plan_point_list mt-3 mb-5">
            <li>
                <span className='point_head'>Telesales</span>
                <span className='point_desc'>50 quality outbound calls p/month</span>
            </li>
            <li>
                <span className='point_head'>Video and Podcast/ Radio</span>
                <span className='point_desc'>50 quality outbound calls p/month</span>
            </li>
            <li>
                <span className='point_head'>PR</span>
                <span className='point_desc'>One blog professionally written per month</span>
            </li>
            <li>
                <span className='point_head'>Business Growth Consultancy</span>
                <span className='point_desc'>15 mins discovery call</span>
            </li>
            <li>
                <span className='point_head'>Social Media Posts</span>
                <span className='point_desc'>1x post / announcement 1x per week on BLG social channels</span>
            </li>
            <li>
                <span className='point_head'>Ad Campaign</span>
                <span className='point_desc'>Facebook ads workshop</span>
            </li>
            <li>
                <span className='point_head'>Event</span>
                <span className='point_desc'>Named sponsor at BLG super network events online</span>
            </li>
            <li>
                <span className='point_head'>Email Marketing</span>
                <span className='point_desc'>Copy written content for own newsletter</span>
            </li>
            <li>
                <span className='point_head'>Social Media Strategy</span>
                <span className='point_desc'>Social media health check</span>
            </li>
            <li>
                <span className='point_head'>Sales Strategy, Systems and Processes</span>
                <span className='point_desc'>30 mins Supercharge zoom session to include sales process and systems audit</span>
            </li>
            <li>
                <span className='point_head'>General Marketing -</span>
                <span className='point_desc'>30 mins exploratory discussion to support current marketing efforts</span>
            </li>
            <li>
                <span className='point_head'>Linkedin Focused Training</span>
                <span className='point_desc'>30 minute consultation call </span>
            </li>
        </ul>

      <div className="d-flex justify-content-between mb-3">
        <div className="left_small_heading">Duration</div>
        <strong className="right_small_heading">Until Cancelled</strong>
      </div>
      <div className="d-flex justify-content-between mb-3">
        <div className="left_small_heading">Price</div>
        <strong className="right_small_heading">£2750 + VAT per month</strong>
      </div>

      <Form className='apply_coupon'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="test" placeholder="Enter coupon code" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Apply
      </Button>

      </Form>
      {/* <input type="text" value="" placeholder="Enter coupon code"/> */}
      

      <div className="d-flex justify-content-between mb-3">
        <div className="left_small_heading">Total</div>
        <strong className="right_small_heading">£2750 + VAT per month</strong>
      </div>

      <p className='mt-5 mb-5 text-left'>You will be charged monthly until cancelled. you can cancel anytime</p>

    </Col>
  )
}

export default PurchaseLeftPanel