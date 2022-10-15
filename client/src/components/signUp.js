import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import pic3 from '../images/reg.jpg'


const SignUp = () =>{
    return (
        <div className='loginView'>
            <div className='signin'>
                <div>
                    <div className='lg'>
                        <img src={pic3}/>
                    </div>
                </div>
                <div>
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
                </div>
            </div>
        </div>
        
    )
}

export default SignUp;


