import React from 'react';

const Hello = () => {
  const onClick = () => {
    alert('Hello')
  }
  const text = 'hello, react'

  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

export default Hello