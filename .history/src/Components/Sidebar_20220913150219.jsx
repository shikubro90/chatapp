import React from 'react'
import Chats from './ChatBar'
import Navbar from './Navbar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Navbar/>
      <Search/>
      
    </div>
  )
}

export default SideBar