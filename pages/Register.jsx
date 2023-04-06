import React, { useEffect } from 'react';
import RegisterComponent from '@/components/RegisterComponent';
import Link from 'next/link';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const Register = () => {
  useEffect(() => {
    onAuthStateChanged(auth, res => {
      if (!res?.accessToken) {
        window.location.href = '../Login';
      }
    })
  }, [])

  return (
    <div>
        <RegisterComponent />
    </div>
  )
}

export default Register