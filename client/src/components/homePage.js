import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic from '../images/organize.jpg'
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
                        <div>
                            <h1 >Get started today!</h1>
                           
                            <form>
                                <label>Sign up with your Email </label>
                                <input className='' placeholder='email@domail.com' />
                                <Button variant='outline-dark'>Get started!</Button>
                            </form>
                        </div>
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
                <Row>
                    
                </Row>
            </Container>

            

        </>
    )
}

export default HomePage;

