import Avatar from '../img/addAvatar.png'

const Message = () => {
  return (
    <div className='message'>

      <div className="messageInfo">
        <img src={Avatar} alt="" />
        <span>Just Now</span>
      </div>

      <div className="messageContent">
        <p>Hello</p>
      </div>

    </div>
  )
}

export default Message