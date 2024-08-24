import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Filter({shoes, setArray}) {
  const [query, setSearchQuery] = useState('')
  return <>
     <div className="flex h-auto">
     <div className="flex h-screen w-96 items-center bg-slate-200 gap-12 mt-10 flex-col">
                <Link className='mt-14 ml-5 text-lg font-normal' to='/AdminPanel'>Add new products</Link>
                <Link className='ml-5 text-lg font-normal' to='/filter'>Remove products</Link>
            </div>
        <div className="flex flex-col w-auto items-center gap-7 text-start mt-10">
            <div className="h-auto min-h-[600px] w-full sm:w-[95%] bg-slate-200 rounded-md p-4 text-start flex flex-col">
              <div className="flex flex-col gap-5">
                <h1 className='text-xl font-semibold'>Delete products</h1>
                <input onChange={e => setSearchQuery(e.target.value)} type="text" className='border-2 h-9 border-[#ececec] rounded-md rounded-bl-md p-2 outline-none' />
              </div>
            <div className="flex w-full flex-wrap gap-5 mt-10">
              {shoes.filter(item => item.name.toLowerCase().includes(query)).map(item => {
                return <div className="flex flex-col items-center pb-4 bg-slate-300 h-auto w-96">
                  <img src={item.image} className='w-full border-tr-rounded-lg border-tl-rounded-lg h-[230px] object-cover'></img>
      <div className="flex flex-col gap-5 justify-center mt-5 text-start">
      <h1 className='text-xl font-medium w-64'>{item.name}</h1>
      </div>
      <button onClick={() => setArray(shoes.filter(deleted => item.name !== deleted.name))} className='h-10 w-64 rounded-md font-semibold bg-gradient-to-r flex justify-center items-center gap-3 text-white from-purple-700 to-purple-800'>Delete</button>
                </div>
              })}
            </div>
        </div>
        </div>
    </div>
  </>
}

export default Filter