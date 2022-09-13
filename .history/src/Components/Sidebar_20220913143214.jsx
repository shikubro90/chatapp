import React from 'react'
import Chat from './Chat'
import Navbar from './Navbar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Navbar/>
      <Search/>
      <Chat
    </div>
  )
}

export default SideBar