import logo from './logo.svg';
import './App.css';
import HomePage from './components/homePage';
import Navigation from './components/navbar';
import Project from './components/project';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/login';
import SignUp from './components/signUp';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <>              
               
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
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
