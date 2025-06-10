import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Usecont } from '../context/context';

const Cart = () => {
    const navigate=useNavigate()
    const {open,setopen,cartarray,getTotalPrice}=Usecont();
    const handleBuy=()=>{
        // This function is called when the user clicks the "buy" button
        // Navigate to the payment page
        getTotalPrice();
        setopen(false);
        navigate('/buyproduct');
    };
    
   
    return (
        <>
            {open&&
            
        <div className='w-[400px] h-[1000px] bg-amber-300  flex flex-col items-center absolute right-[0px] top-[70px] rounded-[10px]'>
            <h1 onClick={()=>setopen(false)} className='text-[2rem] text-[red] cursor-pointer hover:rotate-[360 deg] transition-all ease-in-out duration-1000'>x</h1>
            {cartarray.map((product)=><div className='flex justify-center border items-center text-[#ffffffb4] font-[500] text-[1rem] border-amber-300 gap-[5px]' key={product.id}>
                <img src={product.image} className='w-[50px] h-[50px] rounded-[50%]' alt='k'/>
                <p className='border-r border-r-red-400'>{product.name}</p>
                <p className='border-r border-r-red-400'> price:{product.price} $</p>
                <p className='border-r border-r-red-400'>quantity:{product.quantity}</p>
                <p className='border-r border-r-red-400'>total:{Number(product.price) * Number(product.quantity)} $</p>
            </div>)}
          {cartarray.length>0 ?(<div> <button className='w-[150px] my-4 border border-transparent bg-[blue] outline-none cursor-pointer  rounded-[10px] hover:bg-amber-600 transition  duration-500 ease-in-out text-[#fff]' onClick={()=>handleBuy()}>buy</button>
    
          </div>
        ):""}
        
        </div>
        
            }
        </>
       
    );
}

export default Cart;
