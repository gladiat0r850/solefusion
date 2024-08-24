import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminPanel({shoes, setArray}) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')
    const [desc, setDescription] = useState('')
    const [gender, setGender] = useState('')
    const [kidEligable, toggle] = useState(false)
    function addNewShoe(){
        if(name.trim() !== '' && price > 30 && img.trim() !== '' && desc.trim() !== '' && gender !== undefined){
            setArray([...shoes, {name: name, image: img, price: Number(price), description: desc, id: shoes.length, gender: gender, kidEligable: kidEligable, additionalImages: []}])
            setDescription('')
            setName('')
            setImg('')
            setPrice(0)
        }
    }
    return <body className='overflow-hidden'>
     <div className="flex h-[90vh] justify-between items-center">
     <div className="flex h-screen w-64 bg-slate-200 gap-12 mt-44 flex-col">
                <Link className='mt-14 ml-5 text-xl font-normal' to='/AdminPanel'>Add new products</Link>
                <Link className='ml-5 text-xl font-normal' to='/filter'>Remove products</Link>
            </div>
        <div className="flex flex-col w-screen items-center gap-7 text-start mt-5">
            <div className="h-auto min-h-[600px] w-full sm:w-[95%] bg-slate-200 rounded-md p-4 text-start items-center flex flex-col">
                <h1 className='text-xl font-semibold'>Add new products</h1>
                <div className="flex flex-col gap-3 mt-5">
                    <div className="flex flex-col gap-3 items-start">
                        <input value={name} type="text" placeholder='Product name...' className='h-10 w-96 rounded-md p-2 outline-none border-2 border-[#ececec]' onChange={e => {setName(e.target.value)}} />
                        <input value={price} type="number" placeholder='Price...' className='h-10 w-96 rounded-md p-2 outline-none border-2 border-[#ececec]'  onChange={e => {setPrice(e.target.value)}} />
                        <input value={img} type="text" placeholder='Your image...' className='h-10 w-96 rounded-md p-2 outline-none border-2 border-[#ececec]'  onChange={e => {setImg(e.target.value)}} />
                    </div>
                    <textarea placeholder='Description...' className='p-2 h-32 w-96 outline-none resize-none rounded-md' value={desc} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
            <div className="flex gap-10 items-center">
                <button name='btn' onClick={addNewShoe} className='h-10 w-72 rounded-md bg-gradient-to-r from-orange-400 to-orange-600 text-white font-normal mt-5 text-lg'>SUBMIT</button>
                <div className="flex">
                <button name='btn' onClick={() => setGender('Men')} className=' w-16 h-8 bg-slate-300 rounded-md'>M</button>
                <button name='btn' onClick={() => setGender('Women')} className='h-8 w-16 bg-slate-300 rounded-md'>F</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    </body>
}

export default AdminPanel