

const Message = () => {
  return (
    <div className='message owner'>

      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <span>Just Now</span>
      </div>

      <div className="messageContent">
        <p>Hello</p>
        <img src="https://cdn.vox-cdn.com/thumbor/TmgXcq6_4URVd0YN0SotUf5WYeA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9556001/chicks.0.0.0.jpg" alt="" />
      </div>

    </div>
  )
}

export default Message