import React, { useEffect } from 'react';
import LoginComponent from '@/components/LoginComponent';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const login = () => {
  useEffect(() => {
    onAuthStateChanged(auth, res => {
      if (res?.accessToken) {
        window.location.href = '../upload/Upload';
      }
    })
  }, [])


  return (
    <div>
        <LoginComponent />
    </div>
  )
}

export default login