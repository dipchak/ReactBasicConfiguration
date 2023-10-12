import { useState } from "react";
import "./Membership.plan.css"

import { Container, Row, Col } from 'react-bootstrap'

import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
//import "react-tabs-scrollable/dist/rts.css";

import Plan from "./plan";

function MembershipPlan() {

    const [activeTab, setActiveTab] = useState(1);

    const onTabClick = (e, index) => {
        console.log(e);
        setActiveTab(index);
        console.log('teste',index);
    };
    
    const tabsArray = ['BLG Growth Packages', 'BLG Event Creation and Promotion', 'BLG Media Packages', 'BLG Legal', 'More', 'BLG Legal', 'More', 'BLG Legal', 'More', 'BLG Legal', 'More'];
    console.log (tabsArray)

  return (
        <Container>
            <div className='membership-plan mt-5 mb-5 '>
                <h3 className="h3_heading pb-3">Sign In</h3>
                <Col md={{span:8, offset:2 }} className="pb-5" ><p>Buy a plan of your choice to be the part of the community portal and get access to all the resources at your fingertip for a eco-friendly living.</p></Col>



<Tabs activeTab={activeTab} onTabClick={onTabClick}
 
//   action={tabRef}
 
  isRTL={false}
  
  didReachEnd={(val) => console.log(val)}
  
  didReachStart={(val) => console.log(val)}
  
  tabsScrollAmount={1}

  animationDuration={300}

  navBtnCLickAnimationDuration={300}

  selectedAnimationDuration={300}

//   rightBtnIcon={">"}
//   leftBtnIcon={"<"}

  hideNavBtns={false}

  hideNavBtnsOnMobile={true}

  showTabsScroll={false}

  getTabsBoundingClientRects={(val) => console.log(val)}

//   action={ref}
    mode="scrollSelectedToCenterFromView"
//    navBtnAs="div"
  tabsContainerClassName=""
  tabsUpperContainerClassName=""
//   tabsContainerClassName=""
  leftNavBtnClassName=""
  rightNavBtnClassName=""
  navBtnClassName=""
  navBtnContainerClassName=""
  navBtnStyle={{}}
  tabsContainerStyle={{}}
  tabsUpperContainerStyle={{}}

//   tabsContainerRef={ref}
//   tabRef={ref}
//   leftNavBtnRef={ref}
//   rightNavBtnRef={ref}
>



    {/* generating an array to loop through it  */}
    {tabsArray.map((item) => (
        <Tab key={item}>{item}</Tab>
    ))}
</Tabs>

{tabsArray.map((item, index) => (
<TabScreen key={index} activeTab={activeTab} index={index}
    // You can add animation with adding a custom class
    className="some-animation-class"
>
  <Row>
    <Plan></Plan>
    <Plan></Plan>
    <Plan></Plan>
    <Plan></Plan>
    <Plan></Plan>
  </Row>
</TabScreen>
))}

            </div>
        </Container>
  )
}

export default MembershipPlan