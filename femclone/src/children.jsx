import React from 'react'
import {Link} from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs';

function KidSection({shoes}){
  const kidSection = [...shoes]
  return <>
    <div className='flex flex-col items-center'>
    <div className="flex items-center justify-center h-auto w-full mt-10 flex-wrap gap-5">
    {kidSection.filter(item => item.kidEligable == true).map((item) => {return <div className='h-auto w-96 rounded-lg flex items-center pb-5 gap-12 justify-center cursor-pointer flex-col bg-[#ececec]'>
      <img src={item.image} className='w-full border-tr-rounded-lg border-tl-rounded-lg h-[230px] object-cover'></img>
      <div className="flex flex-col gap-5 justify-center text-start">
      <h1 className='text-xl font-medium w-64'>{item.name}</h1>
      <Link to={`/buy/${item.id}`}><button className='h-10 w-64 rounded-md font-semibold bg-gradient-to-r flex justify-center items-center gap-3 text-white from-orange-500 to-orange-600'>
        <BsCart3 className='text-xl'/>
        BUY</button></Link>
      </div>
    </div>
  })}
  </div>
  </div>
</>
}

export default KidSection