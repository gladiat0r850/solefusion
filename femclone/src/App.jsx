import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './navbar';
import Buy from './buy';
import {Routes, Route, Link} from 'react-router-dom'
import sneakers, {imgArray} from './sneakers';
import { BsCart3 } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './footer';

function App() {
const [sneakerState, setArray] = useState(sneakers)
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
  }, 3000);
}, [imgArray.length]);
  return <>
  <Navbar shoes={sneakerState} setArray={setArray}/>
<Routes>
  <Route path='/' element={<>
    <div className="justify-center flex w-full mt-5">
      <div className="w-4/5 relative">
        <AnimatePresence mode='popLayout'>
          {imgArray.map((_, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={imgArray[index]}
                alt={`Slide ${index}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="h-[350px] w-full object-cover rounded-lg"
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  <div className="flex w-4/5 gap-5 mx-auto mt-5 flex-col sm:flex-row">
  <Link to='/mansection' onClick={() => setArray(shoes)} className='w-full sm:w-1/4'><button className='bg-slate-200 flex-wrap h-32 pl-4 pr-2 w-full flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-400 to-blue-600'>
        <div className="flex flex-col text-start">
        <h1 className='text-white font-semibold text-2xl'>Men</h1>
        <p className='text-white'>{sneakerState.filter(item => item.gender === 'Men').length} Products</p>
        </div>
        <img className='w-[100px]' src="https://www.effectiveecommerce.com/wp-content/uploads/2020/02/nike-shoe-png-nike-shoes-transparent-png-1464.png" />
    </button></Link>
    <Link to='/femalesection' onClick={() => setArray(shoes)} className='w-full sm:w-1/4'><button className='bg-slate-200 flex-wrap h-32 pl-4 pr-2 w-full flex items-center justify-between rounded-lg bg-gradient-to-r from-pink-400 to-pink-500'>
        <div className="flex flex-col text-start">
        <h1 className='text-white font-semibold text-2xl'>Women</h1>
        <p className='text-white'>{sneakerState.filter(item => item.gender === 'Women').length} Products</p>
        </div>
        <img className='w-[100px]' src="https://static.vecteezy.com/system/resources/previews/023/207/262/original/woman-sneakers-isolated-png.png" />
    </button></Link>
    <Link to='/KidsSection' onClick={() => setArray(shoes)} className='w-full sm:w-1/4'><button className='bg-slate-200 flex-wrap h-32 pl-4 pr-2 w-full flex items-center justify-between rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600'>
        <div className="flex flex-col text-start">
        <h1 className='text-white font-semibold text-2xl'>Kids</h1>
        <p className='text-white'>{sneakerState.filter(item => item.kidEligable == true).length} Products</p>
        </div>
        <img className='w-[110px]' src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-9.png" />
    </button></Link>
    <Link to='/mansection' onClick={() => setArray(shoes)} className='w-full sm:w-1/4'><button className='bg-slate-200 flex-wrap h-32 pl-4 w-full flex items-center justify-center rounded-lg bg-gradient-to-t from-slate-300 to-slate-400'>
        <div className="flex flex-col text-start">
        <h1 className='text-white font-bold text-2xl'>New Arrivals +</h1>
        <p className='text-white'>{sneakerState.filter(item => item.gender === 'Men').length} Products</p>
        </div>
    </button></Link>
  </div>
  <div className='flex flex-col items-center'>
    <div className="flex items-center justify-center h-auto w-full mt-10 flex-wrap gap-5">
    {sneakerState.map((item, shutUp) => {return <motion.div initial={{opacity: 0, x: -70}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, ease: 'backInOut', delay: item.id * 0.2}} key={shutUp} className='h-auto w-96 border-[1px] border-[#d2d2d2] rounded-lg flex items-center pb-5 gap-12 justify-center cursor-pointer flex-col bg-[#ececec]'>
      <img src={item.image} className='w-full border-tr-rounded-lg border-tl-rounded-lg h-[230px] object-cover'></img>
      <div className="flex flex-col gap-2 justify-center text-start">
    <div className="flex gap-7">
      <h1 className='text-xl font-[600] w-64'>{item.name}</h1>
    </div>
      <div className="flex gap-5">
      </div>
      <Link to={`/buy/${shutUp}`}><button className='h-10 w-64 rounded-md hover:scale-105 transition-all font-semibold bg-gradient-to-r flex justify-center items-center gap-3 text-white from-orange-500 to-orange-600'>
        <BsCart3 className='text-xl'/>
        BUY ${item.sale ? Math.round(item.price * 0.6) : item.price}</button></Link>
      </div>
    </motion.div>
  })}
  </div>
  </div>
  </>}/>
  <Route path={`/buy/:index`} element={<Buy shoes={sneakerState}/>}
 />
</Routes>
<div className="mt-24">
  <Footer />
</div>
</>
}
console.log(`NOTE: THIS IS NOT A REAL WEBSITE BUT ONLY A PROJECT`);



export default App
