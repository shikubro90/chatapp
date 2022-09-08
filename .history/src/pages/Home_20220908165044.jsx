import React from 'react'
import Sidebar from '../Components/SideBar'
import ChatBar from '../Components/ChatBar'


const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <ChatBar/>
        </div>
    </div>
  )
}

export default Home