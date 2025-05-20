import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Usecont } from "../context/context";


const Buyproduct = () => {
    const {buy,setqauntity,settotalPrice}=Usecont()
    const {id}=useParams();
    const [product,setproduct]=useState({});
    const navigate=useNavigate();
    const [request,setrequest]=useState("submit");
    
    const btn=useRef();
    const inp=useRef();
    const inp2=useRef();
    const inp3=useRef();
    const inp4=useRef();
    const inp5=useRef();
    useEffect(()=>{
        const get=async()=>{
            try{
                axios.get(`e-commrce-back-end-production.up.railway.app/products/${id}`).then((res)=>setproduct(res.data));
            }catch(err){
                console.log(err);
            }
        }
        get()
    },[id])
    const handle=()=>{
        if(inp.current.value !="" && inp2.current.value!="" && inp3.current.value!="" && inp4.current.value!=""&& inp5.current.value!=""){
        btn.current.className="disabled";
        setrequest("done");
        buy(product)
        settotalPrice(inp2.current.value* Number(product.price))
        setqauntity(inp2.current.value);
       
        navigate('/')
        
    }else{
        setrequest("please fill every field")
    }

    }
    
  
    return (
        <div className='mt-[2rem] mb-[30px] w-[400px] h-[600px] shadow-lg shadow-[#292323] m-auto flex flex-col items-center border border-[#292323] p-[1rem] gap-[2rem]'>
           <h1>payment</h1>
           <div className="flex gap-3.5">
            <img className="w-[80px]" src={product.image} alt={product.name}/>
           <h2>{product.name}</h2>
            <h2>{product.price}</h2>
             
            
            </div>
            <input required ref={inp} className='w-[200px] border border-amber-300 text-center outline-0' placeholder='your name'/>
            <input required ref={inp2} className='w-[200px] border border-amber-300 text-center outline-0' placeholder='qauntity ' type='number' />
                <input required ref={inp3} className='w-[200px] border border-amber-300 text-center outline-0' placeholder='card number' type='text'/>
                <input required ref={inp4} className='w-[200px] border border-amber-300 text-center outline-0' placeholder='MM/YY' type='text'/>
                <input required ref={inp5} className='w-[200px] border border-amber-300 text-center outline-0' placeholder='cvv' type='text'/>
                <button ref={btn} onClick={handle} className='w-[200px]  text-center outline-0 cursor-pointer border border-[#292323] rounded-[10px]'>{request}</button>
            
            
        </div>
    );
}

export default Buyproduct;
