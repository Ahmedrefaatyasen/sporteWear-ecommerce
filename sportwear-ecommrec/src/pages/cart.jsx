import React from 'react';
import { Usecont } from '../context/context';

const Cart = () => {
    const {open,setopen,cartarray,qauntity,totalPrice}=Usecont()
    
   
    return (
        <>
            {open&&
            
        <div className='w-[400px] h-[1000px] bg-amber-300  flex flex-col items-center absolute right-[0px] top-[70px] rounded-[10px]'>
            <h1 onClick={()=>setopen(false)} className='text-[2rem] text-[red] cursor-pointer hover:rotate-[360 deg] transition-all ease-in-out duration-1000'>x</h1>
            {cartarray.map(product=><div className='flex justify-center border items-center text-[#ffffffb4] font-[500] text-[1rem] border-amber-300 gap-[5px]' key={product.id}>
                <img src={product.image} className='w-[50px] rounded-[50%]' alt='k'/>
                <p className='border-r border-r-red-400'>{product.name}</p>
                <p className='border-r border-r-red-400'> price:{product.price} $</p>
                <p className='border-r border-r-red-400'>quantity:{qauntity}</p>
                <p className='border-r border-r-red-400'>total:{totalPrice} $</p>
            </div>)}
        </div>}
        </>
       
    );
}

export default Cart;
