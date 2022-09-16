import React from 'react'
import { signOut } from 'firebase/auth'
import {} from 

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Shiku Chat</span>
      <div className='user'>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <span>Jhon</span>
        <button onClick={()=>signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar