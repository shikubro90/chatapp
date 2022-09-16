import Add from '../img/addAvatar.png'

import { useState } from 'react'
import { auth, storage, db } from '../firebase'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import {doc, setDoc} from 'firebase/firestore' 
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

import {useNavigate} from 'react-router-dom'

const Register = () => {
  
  const [err, setErr] = useState(false)
  const navigate = useNavigate() 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      console.log(res)
      // login function

      const storageRef = ref(storage, displayName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        
        (error) => {
          setErr(true)
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {

            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db,"userChats", res.user.uid), {});
            navigate("/");
          }); 
        }
      );
    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit} action="">
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
