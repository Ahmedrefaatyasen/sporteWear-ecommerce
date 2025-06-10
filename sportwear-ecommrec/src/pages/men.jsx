
import React, { useState } from "react";
import { Usecont } from "../context/context";

const Men = () => {
    const {products,addToCart,handleDecrease,increase,setIncrease}=Usecont();
    const [i,seti]=useState(0);
    const newProducts=products.filter((product)=>product.category==="men");

    const handleBuy=(product)=>{

           setIncrease(product.id);
        // This function is called when the user clicks the "add to cart" button

           addToCart(product);
       }


    
    return (
        <div className='sm:my-auto sm:grid sm:grid-cols-3 sm:p-[2rem] gap-[20px]'>
            {newProducts.map((product)=><div key={product.id} className='sm:w-[300px] flex flex-col border border-gray-200 items-center'>
                <img src={product.image} alt={product.name} className='w-[200px]'/>
                <div className='flex justify-between flex-col gap-[10px] '>
                <p className='font-[500]'>{product.name}</p>

                <p className='font-[500]'>price:{product.price} $</p>
                </div>
                     { increase===product.id?<div className=' w-[60%] items-center '>
                    <div className='flex  items-center gap-[5px]'>
                    <button onClick={()=>{addToCart(product);seti(i + 1)}} type="button" className='w-[40px] border border-transparent outline-none bg-red-600 rounded-[5px] text-amber-50 cursor-pointer'>+</button>
                <span className='text-black text-1xl'>{i} in the cart</span>
                <button  type='button' onClick={() => {handleDecrease( product);i>0 && seti(i - 1)}} className='w-[40px] border border-transparent outline-none bg-red-600 rounded-[5px] text-amber-50 cursor-pointer'>-</button>
                </div>
                <div className='flex justify-center items-center'><button onClick={()=>{setIncrease("done")}} className='text-black w-[60px] bg-red-600 cursor-pointer rounded-2xl ' >submit</button></div>

                </div>:<div></div>
                }

                <div>

                    <button onClick={()=>{ handleBuy(product)}}   className='btn w-[150px] my-4 border border-transparent bg-[blue] outline-none cursor-pointer  rounded-[10px] hover:bg-amber-600 transition   duration-500 ease-in-out text-[#fff]'>add to cart</button>
                </div>
            </div>)
            }
            
        </div>
    );
}

export default Men;
