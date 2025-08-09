import React from 'react'
import Avatar from 'react-avatar';


export const Client = ({username}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <Avatar name={username} size={50} round="14px" />
      <p className='text-white font-bold'>{username}</p>
    </div>
  )
}
