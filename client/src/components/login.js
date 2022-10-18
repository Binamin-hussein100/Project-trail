import React, {useState} from 'react';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';
import Button from "react-bootstrap/Button"


const Login = ({onLogin}) => {
  const [showLogin, setShowLogin] = useState(true)

   
    return(
        <div>
            {showLogin ? (
              <>
                <LoginForm onLogin={onLogin}/>
                
                <p>
                Don't have an account? &nbsp;
                <Button variant="outline-secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </Button>
              </p>
                
              </> 
            ) : (
              <>
                <SignUpForm onLogin={onLogin}/>
                
                <p>
                Already have an account? &nbsp;
                <Button variant="outline-secondary" onClick={() => setShowLogin(true)}>
                  Log In
                </Button>
              </p>
              </>
            )}
      </div>
    )
}

export default Login
