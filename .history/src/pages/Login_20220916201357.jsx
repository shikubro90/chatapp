import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom"
import { auth } from "../firebase";
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [err, setErr] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        }catch(err){
            setErr(true)
        }

    }

    return (
      <div className='formContainer'>
          <div className="formWrapper">
  
              <span className='logo'>Let's Chat</span>
              <span className='title'>Login</span>
  
              <form action="" onSubmit={handleSubmit}>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <button>Sign In</button>
                  {err && <span></span>}
              </form>
              
              <p>You don't have an account? <Link to="/register">Register</Link> </p>
  
          </div>
      </div>
    )
  }

  export default Login