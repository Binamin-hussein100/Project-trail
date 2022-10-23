import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import HomePage from './components/homePage';
import Navigation from './components/navbar';
import Project from './components/project';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/login';
import SignUp from './components/signUpForm';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Integration from './components/integration';
import About from './components/about';
import Price from './components/price';
function App() {
    const [user, setUser] = useState(null)

    
    useEffect(() => {
        fetch("/me")
        .then((res)=>{
            if(res.ok){
                res.json().then((user)=> setUser(user))
            }
        })
    },[]);
    
    if(!user) return <Login onLogin={setUser}/>

  return (
    <>        
               
        <BrowserRouter>
        <Navigation user = {user} setUser={setUser}/>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/projects' element={<Project user={user}/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/pricing' element={<Price/>}/>
                <Route path='/int' element={<Integration/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
        <Container fluid>
                <Row id='row4'>
                    <Col className='foot' sm={4}>
                        <h5>Community</h5>
                        <p>Blog</p>
                        <p>Events</p>
                        <p>BuildTV</p>
                        <p>Consultancy Directory</p>
                    </Col>
                    <Col className='foot' sm={4}>
                        <h5>About Us</h5>
                        <p>Team</p>
                        <p>Jobs</p>
                        <p>Branding Guidelines</p>
                    </Col>
                    <Col className='foot' sm={4}>
                        <h5>Support</h5>
                        <p>Help Center</p>
                        <p>Contact Center</p>
                        <p>System status</p>
                    </Col>
                </Row>
            </Container>

            
    </>
  );
}

export default App;
