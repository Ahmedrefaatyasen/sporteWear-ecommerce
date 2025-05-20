import axios from 'axios';
import React, { useState } from 'react';

const Addproduct = () => {
    const[name,setname]=useState("");
    const[price,setprice]=useState("");
    const[cat,setcat]=useState("")
    const[img,setimg]=useState(null)
    const handle=async()=>{
        try{
         await   axios.post("https://e-commrce-back-end-production.up.railway.app/products/",{
                name:name,
                category:cat,
                price:price,
                image:img,
            })
        }catch(err){
            console.log(err);
        }
    }
    return (
       <form className='mb-7 mt-[2rem] w-[450px]  shadow-lg shadow-[#292323] m-auto flex flex-col items-center border border-[#292323] p-[1rem] gap-[2rem]'>
             <label/>add image: <input type='file' onChange={(e)=>setimg(e.target.value)} className='sm:w-[200px] border border-amber-300 cursor-pointer sm:text-center sm:outline-0'/>
              <lable/>name:  <input className='sm:w-[200px] border border-amber-300  sm:text-center sm:outline-0' onChange={(e)=>setname(e.target.value)} type='text' placeholder='name...'/>
              <lable/>price:  <input onChange={(e)=>setprice(e.target.value)} className='sm:w-[200px] border border-amber-300  sm:text-center sm:outline-0' type='text' placeholder='price...'/>
                <lable/>category:  <input onChange={(e)=>setcat(e.target.value)} className='sm:w-[200px] border border-amber-300  sm:text-center sm:outline-0' type='text' placeholder='category...'/>

                <button onClick={()=>handle()} className='w-[200px] text-center outline-0 cursor-pointer border border-[#292323] rounded-[10px]' type='submit'>submit</button> 
            </form>
        
    );
}

export default Addproduct;
