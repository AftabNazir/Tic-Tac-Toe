import React from 'react'

export default function Square(props) {
  return (
    <>    
<div onClick={props.onClick} className='text-8xl border-2 text-gray-400 border-gray-500 rounded-2xl h-30 w-30 flex justify-center'>{props.value}</div>
    </>
  )
}
