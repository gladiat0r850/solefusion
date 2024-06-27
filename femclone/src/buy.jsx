import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsStars, BsCart3 } from 'react-icons/bs';
import { IoStar } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2"

function Buy({shoes}) {
    const { index } = useParams();
    const [sneaker, setSneaker] = useState(null);
    const [amount, setAmount] = useState(1);
    const [initial, setInitial] = useState(0);
    const [initialImage, setImg] = useState('');

    useEffect(() => {
        if (!isNaN(parseInt(index)) && parseInt(index) >= 0 && parseInt(index) < shoes.length) {
            setSneaker(shoes[parseInt(index)]);
            setInitial(shoes[parseInt(index)].price);
            setImg(shoes[parseInt(index)].image);
        }else {
            setSneaker(null);
        }
    }, [index, shoes])

    function AddAmount() {
        if (amount > 1) {
            setAmount(amount - 1);
            setInitial(initial - sneaker.price);
        } else {
            setAmount(1);
        }
    }

    function DecreaseAmount() {
        setAmount(amount + 1);
        setInitial(initial + sneaker.price);
    }

    if (!sneaker) {
        return <h1></h1>
    }

    return <>
        <div className='flex flex-col justify-evenly'>
            <div className="flex justify-center mt-24">
                <div className="flex gap-32 flex-wrap">
                    <div className="flex flex-col gap-7 items-center">
                        <img src={initialImage} className='rounded-3xl border-[1px] border-[#d3d3d3]  object-cover w-[300px] h-[300px] sm:h-[400px] sm:w-[400px]' alt="" />
                        <div className="flex gap-7 flex-wrap justify-center">
                            {sneaker.additionalImages.map((item, idx) => (
                                <img key={idx} onClick={() => setImg(item)} src={item} className='w-20 border-2 border-[#d3d3d3] cursor-pointer h-20 rounded-2xl' />
                            ))}
                        </div>
                    </div>
                    <div className="flex h-[400px] justify-center gap-9 flex-col items-center sm:items-baseline">
                        <div className="flex flex-col gap-5 text-start">
                            <h1 className='text-[#656565] font-medium tracking-widest'>SNEAKER COMPANY</h1>
                            <h1 className='text-4xl font-bold w-96'>{shoes[parseInt(index)].name}</h1>
                        </div>
                        <div className="flex gap-7 text-start flex-col items-center sm:items-baseline">
                            <p className='text-[#a3a3a3] sm:w-[500px] w-[350px]'>{shoes[parseInt(index)].description}</p>
                            <div className="flex flex-col gap-3">
                                <h1 className='text-3xl font-bold'>${shoes[parseInt(index)].sale ? `${(initial * 0.6).toFixed(2)}` : initial.toFixed(2)}</h1>
                                <div className="flex gap-12">
                                    {shoes[parseInt(index)].sale && <h1 className='text-lg font-bold mt-2 text-[#636363] line-through'>${(initial).toFixed(2)}</h1>}
                                    <div className="flex gap-5 flex-col sm:flex-row">
                                        <div className={`flex text-white rounded-lg mt-2 w-24 gap-1 items-center font-semibold justify-center h-8 bg-gradient-to-r ${sneaker.gender === 'Men' ? 'from-orange-400 to-orange-600' : sneaker.gender === 'Women' ? 'from-blue-500 to-blue-600' : 'from-slate-300 to-slate-400'}`}><BsStars />{sneaker.gender === 'Men' ? 'Men' : sneaker.gender === 'Women' ? 'Women' : 'Unisex'}</div>
                                    {sneaker.kidEligable && <div className={`flex mt-2 text-white rounded-lg w-auto p-3 gap-2 items-center font-semibold justify-center h-8 bg-gradient-to-r from-yellow-400 to-yellow-500`}>
                                        <IoStar />
                                        Kid friendly</div>}
                                    {shoes[parseInt(index)].sale && <div className={`flex mt-2 text-white rounded-lg w-auto p-3 gap-2 items-center font-semibold justify-center h-8 bg-gradient-to-r from-orange-400 to-green-500`}>
                                        <HiCurrencyDollar className='text-xl font-bold' />
                                        SALE</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6 flex-wrap justify-center">
                                <div className='flex items-center'>
                                    <button onClick={AddAmount} className='h-16 w-16 rounded-l-xl bg-slate-200 text-orange-500 text-4xl font-extrabold'>-</button>
                                    <button className='h-16 w-16  bg-slate-200 text-2xl font-bold'>{amount}</button>
                                    <button onClick={DecreaseAmount} className='h-16 w-16 rounded-r-xl bg-slate-200 text-orange-500 text-4xl font-extrabold'>+</button>
                                </div>
                                <div>
              <div className='bg-gradient-to-r from-orange-400 to-orange-600 transition-all hover:-translate-y-1 text-white h-16 w-72 rounded-lg cursor-pointer gap-3 flex items-center justify-center'>
                <BsCart3 className='text-xl' />
                <h1 className='text-xl font-medium'>Add to cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}

export default Buy;
