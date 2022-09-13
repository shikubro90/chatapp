import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <Navbar/>
      <Search/>
      <Chats/>
      <Chats/>
      <Chats/>
    </div>
  )
}

export default SideBar