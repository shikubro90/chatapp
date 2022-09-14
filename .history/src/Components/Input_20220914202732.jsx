import Attach from '.'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <img src="" alt="" />
        <input type="file" style={{display : "none"}} />
        <label htmlFor="file">
          <img src="" id='file' alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input