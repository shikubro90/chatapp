import add from '../img/add.png'
import more from '../img/more.png'
import cam 

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
    </div>
  )
}

export default ChatBar