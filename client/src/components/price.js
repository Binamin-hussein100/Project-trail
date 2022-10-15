import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Price = () => {
    return (
        <>
            <Container id='dollar'>
                <h2 className='text-center'>Priced to make collaboration easy!</h2>
                <Row >
                    <Col  sm={3}>
                        <h5 className='text-center'>FREE</h5>
                        <h6 className='text-center'>1-5 collaborators</h6>
                        <div className='pricing'>
                            <h5 className='text-center'>$0</h5>
                            <Button  className='btn2' variant="outline-primary" disabled>Get Started</Button>
                            <ul>
                                <li >Unlimited Core features</li>
                                <li>Unlimited read-only seats</li>
                                <li>5 project limits</li>
                                <li>No free trial</li>
                                <li disabled>free</li>
                                <li>No full project history</li>
                            </ul>
                        </div>
                    </Col>

                    <Col id='dollar' sm={3}>
                        <h5 className='text-center'>STARTUP</h5>
                        <h6 className='text-center'>6-10 collaborators</h6>
                        <div className='pricing'>
                            <h5 className='text-center'>$10</h5>
                            <Button  className='btn2' variant="outline-primary">Start free trial</Button>
                            <ul>
                                <li >Unlimited Core features</li>
                                <li>Unlimited read-only seats</li>
                                <li>Unlimited project limits</li>
                                <li>30-days free trial</li>
                                <li disabled>Flat rate</li>
                                <li>No full project history</li>
                            </ul>
                        </div>
                    </Col>

                    <Col id='dollar' sm={3}>
                        <h5 className='text-center'>STANDARD</h5>
                        <h6 className='text-center'>11+ collaborators</h6>
                        <div className='pricing'>
                            <h5 className='text-center'>$50</h5>
                            <Button  className='btn2' variant="outline-primary">Start free trial</Button>
                            <ul>
                                <li >Unlimited Core features</li>
                                <li>Unlimited read-only seats</li>
                                <li>Unlimited project limits</li>
                                <li>30-days free trial</li>
                                <li disabled>Bundled collaboration</li>
                                <li>No full project history</li>
                            </ul>
                        </div>
                    </Col>

                    <Col id='dollar' sm={3}>
                        <h5 className='text-center'>Enterprise</h5>
                        <h6 className='text-center'>Any number</h6>
                        <div className='pricing'>
                            <h5 className='text-center'>Custom</h5>
                            <Button  className='btn2' variant="outline-primary">Let's talk</Button>
                            <ul>
                                <li >Unlimited Core features</li>
                                <li>Unlimited read-only seats</li>
                                <li>Unlimited project limits</li>
                                <li>30-days free trial</li>
                                <li >Custom</li>
                                <li>Full project history</li>
                            </ul>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Price;