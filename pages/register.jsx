import React, { useEffect } from 'react';
import RegisterComponent from '@/components/RegisterComponent';
import Link from 'next/link';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const register = () => {
  useEffect(() => {
    onAuthStateChanged(auth, res => {
      if (!res?.accessToken) {
        window.location.href = '../login';
      }
    })
  }, [])

  return (
    <div>
        <RegisterComponent />
    </div>
  )
}

export default register