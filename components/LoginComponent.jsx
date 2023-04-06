import React, { useState } from 'react';
import { LoginAPI } from '@/pages/api/authAPI';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const LoginComponent = () => {

  const [credentials, setCredentials] = useState({});

  const Login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
      toast.success('Signed in Successfully', {
        position: 'top-center',
        autoClose: 4000,
      })
      window.location.href = '../upload/Upload';
    } catch (err) {
      toast.error("Check your Email and Password!!", {
        position: 'top-center',
        autoClose: 4000,
      })
    }
  }

  return (
    <div className='mt-20 text-center flex flex-col justify-center content-center items-center w-screen'>
      <div className='flex flex-col w-2/5'>
        <h1 className='text-purple font-bold text-l'>
          LOGIN
        </h1>

        <TextField
          required
          id="outlined-required"
          label="Email"
          margin='dense'
          onChange={(event) => 
            setCredentials({ ...credentials, email: event.target.value})
          }
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin='dense'
          onChange={(event) => 
            setCredentials({ ...credentials, password: event.target.value})
          }
        />
        <Button
          onClick={Login}
          variant="outlined"
          startIcon={<LoginIcon />}
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default LoginComponent