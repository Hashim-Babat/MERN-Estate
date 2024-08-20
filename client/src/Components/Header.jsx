import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const currentUser = useSelector((state) => state.user);
    console.log("Current User:", currentUser); // Log current user data
    console.log("Avatar URL:", currentUser.currentUser.rest.avatar); // Log avatar URL
  return (
    <header className='bg-slate-200 shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Nest</span>
                <span className='text-slate-700'>Quest</span>
            </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg items-center flex' >
                <input type='text' placeholder='Search.....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600 ' />
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline ml-2'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline ml-2'>About</li>
                </Link>
                <Link to='/profile' >
                    { currentUser ? (
                        <img className='rounded-full w-7 h-7 object-cover ml-3' src={currentUser.currentUser.rest.avatar} alt="profile"
                            
                        />
                    ):(
                        <li className='text-slate-700 hover:underline'>Sign In</li>
                    )}
                </Link>
            </ul>
        </div>
    </header>
  )
}
