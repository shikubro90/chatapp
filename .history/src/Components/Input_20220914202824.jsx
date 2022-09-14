import Attach from '../img/attach.png'
import Img from '../img/img.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <img src="" alt="" />
        <input type="file" style={{display : "none"}} />
        <label htmlFor="file">
          <img src={Img} id='file' alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input