import Add from '../img/addAvatar.png'

const Register = () => {

  const handleSubmti=(e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.targte[2].value;
    const file = e.targte[3].file[0];

    console.log(displayName,email,password,file);
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