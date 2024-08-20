import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state)=>state.user);
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form className='flex flex-col gap-4' >
        <img className='rounded-full w-24 h-24 object-cover cursor-pointer self-center mt-2' src={currentUser.rest.avatar}/>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-70'>update</button>
      </form>

      <div className='flex justify-between mt-4'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
