import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className='send'>
        <img src="" alt="" />
        <input type="file" style={{display : "none"}} />
        <label htmlFor=""></label>
      </div>
    </div>
  )
}

export default Input