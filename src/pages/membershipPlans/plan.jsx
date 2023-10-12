import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function plan() {
  return (
    <Col md={4} className='mt-5'>
        <div className='plan_box p-3'>
            <strong>BLG - BRONZE BUSINESS GROWTH PACKAGE </strong>
            <div className='amt'>£1000 <span>+ VAT per month</span></div>
            <hr></hr>
            <ul class="plan_point_list">
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
            <a href='/Purchasepanel' className='bgl_button text-center'>Register Now</a>
        </div>
    </Col>
  )
}

export default plan