import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () =>{
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone number:</Form.Label>
                    <Form.Control type='number'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password'/>
                </Form.Group>
                <Button id='btn' variant="outline-dark" type='submit'>Sign Up</Button>
            </Form>
        </Container>
        
    )
}

export default SignUp;