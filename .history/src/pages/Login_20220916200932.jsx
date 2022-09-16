import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"
import { auth } from "../firebase";

const Login = () => {

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            await signInWithEmailAndPassword(auth, email, password)
        }catch()}

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
              </form>
              
              <p>You don't have an account? <Link to="/register">Register</Link> </p>
  
          </div>
      </div>
    )
  }

  export default Login