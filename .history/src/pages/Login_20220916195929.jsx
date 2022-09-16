import { Link } from "react-router-dom"

const Login = () => {
    return (
      <div className='formContainer'>
          <div className="formWrapper">
  
              <span className='logo'>Let's Chat</span>
              <span className='title'>Login</span>
  
              <form action="">
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <button>Sign In</button>
              </form>
              
              <p>You don't have an account? <Link>Register</Link> </p>
  
          </div>
      </div>
    )
  }

  export default Login