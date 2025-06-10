import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { Usecont } from '../context/context';
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    const { setopen, cartarray } = Usecont();
    const [show, setshow] = useState(false);
    return (
        <header className='flex items-center p-[1rem] justify-between sm:flex sm:justify-between sm:text-[black] sm:p-[2rem]'>
        
            <Link to='/' className='text-[1.2rem] font-bold'>Sports wear</Link>
            <ul className='invisible sm:visible sm:flex gap-[1rem]' >
                <li className=' hover:border-b hover:border-red-500 transition  duration-[.5s] ease-in-out  '><Link to='/home'>Home</Link></li>
                <li className='hover:border-b hover:border-red-500 transition  duration-[.5s] ease-in-out'><Link to={'/men'}>Men</Link></li>
                <li className='hover:border-b hover:border-red-500 transition  duration-[.5s] ease-in-out'><Link to={'/women'} >Women</Link></li>
                <li className='hover:border-b hover:border-red-500 transition  duration-[.5s] ease-in-out'><Link to={'./kids'} >kids</Link></li>
                  <li className='hover:border-b hover:border-red-500 transition  duration-[.5s] ease-in-out'><Link to={'./contactus'} >Contact us</Link></li>
               
            </ul>
                < RxHamburgerMenu onClick={()=>setshow(true)} className='visible cursor-pointer text-[2rem] sm:invisible'/>
            <div className='invisible sm:visible sm:flex gap-[1rem] sm:items-center'>
            <Link className='hover:border-b hover:border-red-500 transition  duration-[.5s] ease-in-out' to="/login">login</Link>
            <Link onClick={()=>setopen(true)} className='sm:text-[2rem]'><CiShoppingCart/></Link>
            <span className='text-red-600 relative text-2xl top-[10px] right-[40px]'>{cartarray.length}</span>
            </div>
            {show&&<div className='w-[100%] p-[1rem] flex flex-col items-center absolute  top-[40px]  bg-[black] text-amber-50'>
                        <Link onClick={()=>{setopen(true) ;setshow(false)}} className='sm:text-[2rem]'><CiShoppingCart className='text-[2rem]'/></Link>
                        <div>
                              <ul className='flex flex-col items-center gap-[1rem]' >
                <li ><Link  onClick={()=>setshow(false)}  to='/home'>Home</Link></li>
                <li ><Link onClick={()=>setshow(false)}  to={'/men'}>Men</Link></li>
                <li ><Link  onClick={()=>setshow(false)} to={'/women'} >Women</Link></li>
                <li><Link onClick={()=>setshow(false)}  to={'./kids'} >kids</Link></li>
                <li><Link onClick={()=>setshow(false)}  to={'./contactus'} >Contact us</Link></li>
                  <li><Link onClick={()=>setshow(false)}  to="/login">login</Link></li>
                  <li onClick={()=>setshow(false)} className='text-[1.9rem] cursor-pointer text-red-600 font-[500]'>x</li>
               
            </ul>

                        </div>
                </div>}
            
        </header>
    );
}

export default Navbar;
