import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import pic2 from '../images/unlock.jpg'


const LoginForm =({ onLogin })=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r)=>{
            if(r.ok){
                r.json().then((user)=>{
                    console.log(user)
                    onLogin(user)
                })
            }
        })
    }
    
    return (
            <>
                <div className='loginView'>
                    <div className='signin'>
                        <div className='lg'>
                            <img src={pic2} alt='log in'/>
                        </div>
                        <div className='lgForm'>
                            <h3 id='logTitle' className='text-center'>Log in to your Account.</h3>
                            <div className='formy'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control autoComplete='off' value={username} onChange={(e)=>setUsername(e.target.value)} type='text'/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type='password'/>
                                    </Form.Group>
                                    <Button type='submit' id='signinSub' className='text-center' variant='outline-dark'>Sign in</Button>
                                </Form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
    )
}

export default LoginForm;

