import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic from '../images/organize.jpg'
import pic1 from '../images/office.jpg'
import * as GrIcons from 'react-icons/gr'
import Button from 'react-bootstrap/Button';


const HomePage = () => {
    return (
        <>
    
            <Container className='homepView'>
                <Row id='row1' >
                    <Col sm={6}>
                        
                       <img src={pic} alt='Project manager'/>
                       <div>
                            <Button variant='outline-dark'>Log in</Button>
                            <Button variant='outline-dark'>Sign up</Button>
                       </div>
                    </Col>
                    <Col sm={6} id="display" >
                    <div className='text-center' id='launchD'>
                        <h3 id='launch'>WELCOME TO PROJECT ALLIANCE <GrIcons.GrLaunch/></h3>
                        <p>Project planning taken to the next level.</p>
                        {/* <div>
                            <h1 >Get started today!</h1>
                           
                            <form>
                                <label>Sign up with your Email </label>
                                <input className='' placeholder='email@domail.com' />
                                <Button variant='outline-dark'>Get started!</Button>
                            </form>
                        </div> */}
                        
                    </div>
                    </Col> 
                </Row>                
            </Container>
            <Container id='intro'>
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
            <Container fluid>
                <Row id='row4'>
                    <Col className='foot' sm={4}>
                        <h5>Community</h5>
                        <p>Blog</p>
                        <p>Events</p>
                        <p>BuildTV</p>
                        <p>Consultancy Directory</p>
                    </Col>
                    <Col className='foot' sm={4}>
                        <h5>About Us</h5>
                        <p>Team</p>
                        <p>Jobs</p>
                        <p>Branding Guidelines</p>
                    </Col>
                    <Col className='foot' sm={4}>
                        <h5>Support</h5>
                        <p>Help Center</p>
                        <p>Contact Center</p>
                        <p>System status</p>
                    </Col>
                </Row>
            </Container>

            

        </>
    )
}

export default HomePage;

