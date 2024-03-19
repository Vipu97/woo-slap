import React from 'react'

const Button = ({text,classname,onClick}) => {
  return (
    <button className = {`bg-blue text-white border-2 border-transparent hover:bg-white
    hover:border-blue rounded-3xl hover:text-blue ${classname}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button