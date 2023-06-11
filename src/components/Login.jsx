import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import "../assets/styles/Login.css"

const Login = () => {
  return (
    <Box className='login-Main'>
        <div className='loginForm'>
          <div>   
              <div className="loginInput">
                <TextField
                  // className='loginInput'
                  id="outlined-error-helper-text"
                  label="Email"
                />
              </div>

              <div className="loginInput">
                <TextField
                  // className='loginInput'
                  id="outlined-error-helper-text"
                  label="Password"
                />
              </div>

            <div>
              <Button className='loginButton' variant="contained">Login</Button>
            </div>
          </div>   
        </div>
    </Box>
  )
}

export default Login