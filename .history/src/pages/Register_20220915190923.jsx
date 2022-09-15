import Add from '../img/addAvatar.png'
import {auth} from "../frebase"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
import { useState } from 'react';


const Register = () => {

  const [err, setErr] = useState

  const handleSubmti= async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    const response = await createUserWithEmailAndPassword(auth, email, password)
    console.log(response)    

  } 



  return (
    <div className='formContainer'>
        <div className="formWrapper">

            <span className='logo'>Let's Chat</span>
            <span className='title'>Register</span>

            <form onSubmit={handleSubmti} action="" >
                <input type="text" placeholder='Display name' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            
            <p>You do have account? Login</p>

        </div>
    </div>
  )
}

export default Register