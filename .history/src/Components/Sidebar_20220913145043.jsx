import React from 'react'
import ChatBar from './ChatBar'
import Navbar from './Navbar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Navbar/>
      <Search/>
      <ChatBar/>
    </div>
  )
}

export default SideBar