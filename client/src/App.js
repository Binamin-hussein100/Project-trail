import logo from './logo.svg';
import './App.css';
import HomePage from './components/homePage';
import Navigation from './components/navbar';
import Project from './components/project';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/login';
import SignUp from './components/signUp';
function App() {
  return (
    <>              
        {/* <Navigation/>
        <Routes>
            <Route path='/' exact element={<HomePage/>}/>
            <Route path='/projects' element={<Project/>}/>
        </Routes> */}
{/* 
        <Router>
          <Navigation/>
              <Route path='/' exact component={HomePage}/>
              <Route path='/projects' component={Project}/>
        </Router> */}
        
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
            
    </>
  );
}

export default App;
