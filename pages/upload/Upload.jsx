import React, { useCallback, useState, useRef, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import { db, storage } from '../../firebaseConfig';
import { addDoc, arrayUnion, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';

const Upload = () => {
  useEffect(() => {
    onAuthStateChanged(auth, res => {
      if (!res?.accessToken) {
        window.location.href = '../Login';
      }
    })
  }, [])

  const [selectedImages, setSelectedImages] = useState([])

  const title = useRef(null)

  const uploadPost = async() => {
    const docRef = await addDoc(collection(db, 'events'), {
      title:title.current.value,
      timestamp:serverTimestamp()
    })
    await Promise.all(
      selectedImages.map(image => {
        const imageRef = ref(storage, `posts/${docRef.id}/${image.path}`);
        uploadBytes(imageRef, image, 'data_url').then(async () => {
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db, 'events', docRef.id), {
            images:arrayUnion(downloadURL)
          })
        })
      })
    )

    title.current.value=''
    setSelectedImages([])

  }

  const onDrop = useCallback(acceptedFiles => {
    setSelectedImages(acceptedFiles.map(file =>
      Object.assign(file, {
        preview:URL.createObjectURL(file)
      })
      ))
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const imagesSelected = selectedImages?.map((file, index) => (
    <div key={index}>
      <img src={file.preview} style={{width:"200px"}} alt="" />
    </div>
  ))

  return (
    <div className='mt-20 text-center flex flex-col justify-center content-center items-center w-screen'>
      <div className='mt-20 flex flex-col w-2/4 text-center content-center align-middle'>
        <div {...getRootProps()} >
          <input {...getInputProps()} />
            <p>Drop the files here ...</p>
        </div>

        <input ref={title} type='text' placeholder='Enter Title' />
        <Button
            onClick={uploadPost}
            variant="outlined"
            startIcon={<CloudUploadIcon />}
          >
            Post
          </Button>
        <Link href='../Register' className='p-5'>
          Add User
        </Link>

        {imagesSelected}

      </div>
    </div>
  )
}

export default Upload