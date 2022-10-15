import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login =()=>{
    return (
        <Container >
            
            <Row id='signin'>
                <Col sm={3}></Col>
                <Col sm={6}>
                <h3>Log in to your Account.</h3>
                <Form>
                    <Form.Group>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type='text'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type='password'/>
                    </Form.Group>
                    <Button variant='outline-dark'>Sign in</Button>
                </Form>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
    )
}

export default Login;

