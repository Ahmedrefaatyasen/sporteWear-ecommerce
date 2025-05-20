import axios from 'axios';
import React, { useState } from 'react';

const Contactus = () => {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[message,setmessage]=useState('');
    const handle=async()=>{
         try{
            axios.post("https://e-commrce-back-end-production.up.railway.app//messages/",{
                name,
                email,
                message
            })
         }catch(err){
            console.log(err);
         }
    }
    return (
        <div className='flex mb-[2rem] h-[400px] flex-col items-center my-auto mx-auto gap-[10px] w-[500px] shadow-lg shadow-[#292323] border'>
            <h1 className='mt-[20px] font-[500] text-[1.4rem]'>Contact Us</h1>
            <form className='flex gap-[10px] flex-col'>
                <label/>Name:<input onChange={(e)=>setname(e.target.value)} className='w-[200px] rounded-[5px] text-center outline-none border border-amber-300' type='text' placeholder='name.....'/>
                <label/>email:<input onChange={(e)=>setemail(e.target.value)} className='w-[200px] rounded-[5px] text-center outline-none border border-amber-300' type='email' placeholder='email.....'/>
                <label/>message:<textarea  onChange={(e)=>setmessage(e.target.value)} className='w-[200px] outline-none border border-amber-300 rounded-[5px] text-center '></textarea>
                <button onClick={handle} className='w-[200px] cursor-pointer outline-none border border-amber-300 rounded-[5px] text-center '>send</button>
            </form>

        </div>
    );
}

export default Contactus;
