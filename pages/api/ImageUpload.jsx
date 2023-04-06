import { getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ImageUpload = (file, subFolder, imageName, setProgress) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, subFolder, + '/' + imageName);
    const upload = uploadBytesResumable(storageRef, file)
    upload.on (
      'state_changed',
      (snapshot) => {
        const progress = 
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
      }, 
      (error) => {
        reject(error)
      },
      async () => {
        try {
          const url = await getDownloadURL(storageRef);
          resolve(url);
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

export default ImageUpload