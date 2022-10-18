import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import pic3 from '../images/reg.jpg'


const SignUpForm = ({onLogin}) =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault()
        fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                phoneNumber,
                password,
                passwordConfirm
            })
        }).then((res)=>{
            if(res.ok){
                res.json().then((user)=>onLogin(user))
            }
        })
    }

    

    return (
        <div className='loginView'>
            <div className='signup'>
                <div>
                    <div className='lg'>
                        <img src={pic3} alt='Sign up'/>
                    </div>
                </div>
                <div className='lgForm'>
                    <h3 id='logTitle' className='text-center'>Log in to your Account.</h3>
                    <div className='formy'>
                        <Form onSubmit={handleSubmit}> 
                            <Form.Group>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control  value={username} onChange={(e)=>setUsername(e.target.value)} type='text'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phone number:</Form.Label>
                                <Form.Control value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type='number'/>
                            </Form.Group> 
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} type='password'/>
                            </Form.Group>
                            <Button id='signinSub' className='text-center' variant="outline-dark" type='submit'>Sign Up</Button>
                        </Form>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default SignUpForm;


