import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import pic5 from '../images/fireworks.jpg'


const About = () => {
    return (
        <>
            <Container fluid id='credit' className='text-center'>
                <h3> <u>ABOUT US</u> </h3>
                <Row className='cred'>
                    <Col className='info' sm={6}>
                        <h6>How does it work?</h6>
                        <p>What is Abojani? Abojani is a straightforward project-planning tool that helps software development teams form realistic expectations about when work might be completed based on the team's ongoing performance.</p>
                        <p>
                        These features alone make it an interesting choice, especially if your company is able to adapt to the Abojani Labs methodology. It also includes all of the features that you’d expect from any piece of project planning software, but there are plenty of extras that are unique to Abojani and unavailable anywhere else.
                        </p>
                    </Col>

                    <Col className='info' sm={6}>
                        <h6>What problems are you solving?</h6>
                        <p>
                            It depends on the task
                            <ul>
                                <li>
                                FEATURE: A specific subroutine that runs within a piece of software and allows you to do something. For example, the ability to add a table is a feature of Microsoft Word.
                                </li>
                                <li>
                                BUG: This classification is for the fixes you roll out when a user reports an issue with the software.
                                </li>
                                <li>
                                CHORE: Think of this as cleaning the bathroom or changing to winter tires. These stories might not be as glamorous as new features, but that doesn’t mean they’re any less important.
                                </li>
                                <li></li>
                            </ul>
                        </p>
                    </Col>
                </Row>
                <Row >
                    <h3><u>OUR AWARDS</u></h3>
                    <Col className='award' sm={3}>
                        <div>
                            <div>
                                <img src={pic5} alt='award'/>
                            </div>
                            <div>
                                <h6>2022</h6>
                                <h6>BEST EMERGING AGILE APP</h6>
                                <p>Digital Inclusion AWARDS, Kenya</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='award' sm={3}>
                        <div>
                            <div>
                                <img src={pic5} alt='award'/>
                            </div>
                            <div>
                                <h6>2022</h6>
                                <h6>BEST EMERGING AGILE APP</h6>
                                <p>Digital Inclusion AWARDS, Kenya</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='award' sm={3}>
                        <div>
                            <div>
                            <img src={pic5} alt='award'/>
                            </div>
                            <div>
                                <h6>2022</h6>
                                <h6>BEST EMERGING AGILE APP</h6>
                                <p>Digital Inclusion AWARDS, Kenya</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='award' sm={3}>
                        <div>
                            <div>
                                <img src={pic5} alt='award'/>
                            </div>
                            <div>
                                <h6>2022</h6>
                                <h6>BEST EMERGING AGILE APP</h6>
                                <p>Digital Inclusion AWARDS, Kenya</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;