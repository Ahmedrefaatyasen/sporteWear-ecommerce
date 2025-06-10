import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Usecont } from '../context/context';

const Dashboard = () => {
    const navigate=useNavigate()
    const{users,handleUsers}=Usecont();
    const logout=()=>{
        localStorage.removeItem("adminEmail");
        navigate('/')
    }
    
    return (
        <div className='flex w-[100%] gap-[2rem] sm:gap-[4rem] '>
        <div className='w-[60%] sm:w-[40%] rounded-[5px] h-[100vh] bg-[black] text-[#fff] flex flex-col pt-[1rem] gap-[20px]  items-center '>
            <Link to={'/addproduct'} className='mt-[100px] bg-[white] text-black p-[5px] rounded-[5px] border border-transparent'>add product</Link>
            <Link to={'/allproducts'} className='bg-red-600 p-[5px] rounded-[5px] border border-transparent' >All products</Link>
            <button onClick={()=>logout()} className='bg-blue-600 cursor-pointer text-[white] p-[5px] rounded-[5px] border border-transparent'>log out</button>
            
            

           
        </div>
        <div className='w-[90%] '>
        <table className='mr-auto ml-auto '>
            <thead className='text-center border border-amber-400'>
                <th className='border-r border-amber-400'>email</th>
                <th  className='border-r border-amber-400'>password</th>
                <th className='border-r border-amber-400'>actions</th>
            </thead>
            <tbody className='border text-center border-amber-400'>
               
               
                {users.map((x)=> <tr  className='border-b border-amber-400' key={x.id}>
                   <td  className='border-r border-amber-400'> {x.email}</td>
                   <td  className='border-r border-amber-400'>{x.password}</td>
                    <td  className='flex gap-[10px]'>
                    <button onClick={()=>handleUsers(x.id)} className='sm:w-[60px] my-2 mx-2  outline-none border border-transparent rounded-[5px] bg-red-600 cursor-pointer text-[white]'>del</button>
                    
                </td>
                </tr>)}
                
            
            </tbody>
        </table>
        </div>
        </div>
    );
}

export default Dashboard;
