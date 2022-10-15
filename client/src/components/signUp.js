import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import pic3 from '../images/reg.jpg'


const SignUp = () =>{
    return (
        <div className='loginView'>
            <div className='signup'>
                <div>
                    <div className='lg'>
                        <img src={pic3}/>
                    </div>
                </div>
                <div className='lgForm'>
                    <h3 id='logTitle' className='text-center'>Log in to your Account.</h3>
                    <div className='formy'>
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
                            <Button id='signinSub' className='text-center' variant="outline-dark" type='submit'>Sign Up</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SignUp;


