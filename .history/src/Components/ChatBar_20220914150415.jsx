import add from '../img/add.png'


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