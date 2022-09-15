import Add from '../img/addAvatar.png'
import { auth, getStorage } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

const Register = () => {
  const [err, setErr] = useState(false)

  const handleSubmti = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const storage = getStorage()
      const storageRef = ref(storage, 'images/rivers.jpg')

      const uploadTask = uploadBytesResumable(storageRef, file)

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL)
          })
        },
      )
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmti} action="">
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" style={{ display: 'none' }} id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add Avatar</span>
          </label>
          <button>Sign up</button>
          {err && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              Something is wrong
            </span>
          )}
        </form>

        <p>You do have account? Login</p>
      </div>
    </div>
  )
}

export default Register
