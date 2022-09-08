

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">

            <span className='logo'>Let's Chat</span>
            <span className='title'>Register</span>

            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" style={} id="file" />
                <label htmlFor="file">
                  asdf
                </label>
                <button>Sign up</button>
            </form>
            
            <p>You do have account? Login</p>

        </div>
    </div>
  )
}

export default Register