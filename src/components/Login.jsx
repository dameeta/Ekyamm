import { Box, Button, Container, FormControl, TextField } from '@mui/material'
import React from 'react'
import "../assets/styles/Login.css"
import MaxHealthCare from "../assets/logo/MaxHealthCare.png"
import Ekyamm from "../assets/logo/Ekyamm.png"

const Login = () => {
  return (
    <Box width="100%" className='login-Main'>
      <Container>
        <div className='loginForm'>
          <FormControl>  
            <div className='loginHeader'>
              <img src={MaxHealthCare} height="50px" width="100px" alt="Logo" />
            </div>
            <div className='loginHeader'>
              <h4>Login to continue</h4>
            </div>
            <input className="loginInput" placeholder='Enter email address'/>  
            <input className="loginInput" placeholder='Enter password'/>  
              
          </FormControl>   
          <div className='loginSubmitButton'>
            <p>Forgot Password?</p>
            <Button className='loginButton' variant="contained">Login</Button>
          </div>
        </div>
        <div className='footer'>
          <p>Copyright © 2023</p>
          <img src={Ekyamm} alt="Logo" />
        </div>
      </Container>
    </Box>
  )
}

export default Login