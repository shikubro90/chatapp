import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">

            <span className='logo'>Let's Char</span>
            <span className='title'>Let's Char</span>


            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" />
            </form>
        </div>
    </div>
  )
}

export default Register