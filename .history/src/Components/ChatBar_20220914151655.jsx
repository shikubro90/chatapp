import add from '../img/add.png'
import more from '../img/more.png'
import cam from '../img/cam.png'
import Messages from './Messages'
import Input from '../Components'

const ChatBar = () => {
  return (
    <div className="chatBar">
      <div className="chatInfo">
        <span>Shiku</span>
          <div className="chatIcon">
            <img src={add} alt="" />
            <img src={more} alt="" />
            <img src={cam} alt="" />
          </div>
        </div>

        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>
        <Messages/>

        <input/>

    </div>
  )
}

export default ChatBar