import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import pic2 from '../images/unlock.jpg'


const Login =()=>{
    return (
            <>
                <div className='loginView'>
                    <div className='signin'>
                        <div className='lg'>
                            <img src={pic2}/>
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
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control type='password'/>
                                    </Form.Group>
                                    <Button id='signinSub' className='text-center' variant='outline-dark'>Sign in</Button>
                                </Form>
                            </div>
                            <div id='dha' className='text-center'>
                                <h5>Don't have an Account? Sign Up</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Login;

