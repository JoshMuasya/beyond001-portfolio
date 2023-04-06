import React, { useState } from 'react';
import { RegisterAPI } from '@/pages/api/authAPI';
import TextField from '@mui/material/TextField';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const RegisterComponent = () => {
    const [credentials, setCredentials] = useState({});

    const router = useRouter()

    const register = () => {
      try {
        let res = RegisterAPI(credentials.email, credentials.password)
        toast.success('User Registered', {
          position: 'top-center',
          autoClose: 4000,
        })
        credentials.email = ''
        credentials.password = ''

        router.push('/Login')
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
          REGISTER
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
          onClick={register}
          variant="outlined"
          startIcon={<AppRegistrationIcon />}
        >
          Register
        </Button>
      </div>
    </div>
    )
}

export default RegisterComponent