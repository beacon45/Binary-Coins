import React from 'react'
import { Link } from "react-router-dom";
import mainlog from '../assets/mainlog.png'

const Logo = () => {
    return (
        <Link
            to="/"
            className="absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
            text-lg text-cyan flex items-center"
        >
            <img src={mainlog} alt="CryptoBucks" className=' w-[100px] mx-3' />
            <span className=' font-extrabold text-4xl text-blue-500'>
            <span className=' text-3xl font-semibold text-white'> B<span className=' text-[#d18543]'>ⓘ</span>nary </span>
             Co<span className=' text-[#d8cd4a]'>in</span>s</span>
        </Link>
    )
}

export default Logo