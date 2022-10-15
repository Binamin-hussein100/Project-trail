import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic from '../images/organize.jpg'
import pic1 from '../images/office.jpg'
import * as GrIcons from 'react-icons/gr'
import { Button } from 'react-bootstrap';

const HomePage = () => {
    return (
        <>
    
            <div id='home'>
            <Container className='homepView'>
                <Row id='row1' >
                    <Col sm={6}>
                        
                       <img src={pic} alt='Project manager'/>
                       <div className='login'>                          
                       </div>
                    </Col>
                    <Col sm={6} id="display" >
                        <p>
                            
                        </p>
                    <div className='text-center' id='launchD'>
                        <h1 id='plan'>PLAN BEYONG LIMITS  <GrIcons.GrLaunch/></h1>                       
                    </div>
                    <div id='getStarted'>
                        <h3 className='text-center'>
                            Get started today!                       
                        </h3>
                        <div className='optio'>
                            <div>                              
                                <Button variant='outline-dark'>Add task</Button>
                            </div>
                            <div>
                               <Button variant='outline-dark'>Start project</Button>
                            </div>
                        </div>
                    </div>
                    </Col> 
                </Row>                
            </Container>
            <Container className='text-center' id='intro'>
                <Row>
                    <Col sm={12}>
                    <h3>Proven project management for successful teams</h3>
                    <p id='pitch'>With a shared view of team priorities, a process that fosters collaboration, and dynamic tools to analyze progress your team will deliver more frequently and consistently.</p></Col>
                </Row>
            </Container>
            <Container>
                <Row id='row2'>
                    <Col sm={6}>
                        <h4 id='intro3'>Better organization to get focused</h4>
                        <p id='intro2'>
                            <span>Keep your team on the rails</span><p>
                                Tracker's shared backlogs makes priorities clear so the team can get organized. Easily vitualize scope, focus your team and stay nimble when circumstances change. 
                            </p>
                        </p>
                    </Col>
                    <Col sm={6}>
                        <img src={pic1} alt='Project manager'/>
                    </Col>
                </Row>
            </Container>
            </div>
                      

        </>
    )
}

export default HomePage;

