const Login = () => {
    return (
      <div className='formContainer'>
          <div className="formWrapper">
  
              <span className='logo'>Let's Chat</span>
              <span className='title'>Register</span>
  
              <form action="">
                  <input type="text" placeholder='Display name' />
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <input type="file" style={{display:"none"}} id="file" />
                  <button>Sign In</button>
              </form>
              
              <p>You do have account? Login</p>
  
          </div>
      </div>
    )
  }
  