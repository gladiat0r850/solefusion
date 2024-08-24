import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import Mansection from './mansection';
import WomenSection from './femaleSection';
import './App.css';
import SearchQuery from './SearchQuery';
import KidSection from './children';
import AdminPanel from './AdminPanel';
import sneakers from './sneakers';
import Filter from './filter';

function Navbar({ shoes, setArray }) {
  const isAdmin = true
  const [inputQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  function searchEngineFilter(e) {
    setSearchQuery(e.target.value);
  }

  function acceptRequest() {
    navigate('/querySection');
  }

  function keyDown(e) {
    if (e.key === 'Enter') acceptRequest();
  }

  return <>
      <div className="flex justify-center">
        <div className="flex h-auto p-8 sm:p-6 w-[80%] border-b-2 border-b-[#ececec] items-center justify-between flex-wrap">
          <div className="flex gap-14 items-center">
              <Link to='/'><h1 onClick={() => setArray(sneakers)} className='header font-[600] text-4xl'>sneakers</h1></Link>
            <div className="hidden gap-6 text-[#949494] sm:flex">
              {isAdmin && <Link className='text-orange-500' onClick={() => setArray(sneakers)} to='/AdminPanel'>Admin Panel</Link>}
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="flex items-center mt-7 sm:mt-0">
            <input onChange={searchEngineFilter} onKeyDown={keyDown} type="text" className='border-2 h-8 border-[#ececec] rounded-tl-md rounded-bl-md p-1 outline-none w-64' />
            <button onClick={() => inputQuery.trim() !== '' ? acceptRequest : console.log(`empty queries dont work`)} className='h-8 w-14 bg-gradient-to-r flex items-center justify-center from-orange-400 to-orange-600 rounded-r-lg text-white'>
              <AiOutlineSearch className='text-xl' />
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/AdminPanel' element={<AdminPanel shoes={shoes} setArray={setArray} />} />
        <Route path='/querySection' element={<SearchQuery setArray={setArray} bouttaBeFiltered={shoes} inputQuery={inputQuery} />} />
        <Route path='/femalesection' element={<WomenSection shoes={shoes} />} />
        <Route path='/mansection' element={<Mansection shoes={shoes} />} />
        <Route path='/kidsection' element={<KidSection shoes={shoes} />} />
        <Route path='/filter' element={<Filter shoes={shoes} setArray={setArray}/>} />
      </Routes>
    </>
}

export default Navbar;
