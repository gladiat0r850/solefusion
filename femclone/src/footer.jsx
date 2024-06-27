import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    const date = new Date
  return <>
    <div className='w-full border-t-2 h-44 flex justify-around items-center'>
        <div className="flex flex-col gap-3">
            <Link to='/'><h1 onClick={() => setArray(sneakers)} className='header font-[600] text-4xl'>sneakers</h1></Link>
            <p>©Copyright {date.getFullYear()}. All rights reserved</p>
            <div className="flex gap-5">
              <div className="flex items-center cursor-pointer justify-center h-10 w-10 rounded-lg bg-[#ececec]">
                <FaYoutube className="text-2xl" />
              </div>
              <div className="flex items-center cursor-pointer justify-center h-10 w-10 rounded-lg bg-[#ececec]">
                <FaXTwitter className="text-2xl" />
              </div>
              <div className="flex items-center cursor-pointer justify-center h-10 w-10 rounded-lg bg-[#ececec]">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="flex items-center cursor-pointer justify-center h-10 w-10 rounded-lg bg-[#ececec]">
                <FaFacebook className="text-2xl" />
              </div>
            </div>
        </div>
    </div>
  </>
}

export default Footer