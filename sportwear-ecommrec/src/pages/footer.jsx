import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='flex flex-col gap-[2rem] p-[2rem] mt-[3rem] sm:flex sm:flex-row sm:justify-between text-black '>
            <div className='sm:flex sm:flex-col gap-4'>
            <h2 className='text-[1.2rem] font-[700]' >Sports Wear</h2>
            <p className='font-[400]'>your top destination for modern and comfortable atheltic wear </p>
            </div>
            <p className='text-[1.2rem] font-[700]'>copy&right 2025</p>
            <div  className='flex gap-[1rem]'>
                <i ><Link to='/home' className='underline-none text-[1rem] font-[400]'>Home</Link></i>
                <i ><Link to='/contactus' className='underline-none text-[1rem] font-[400]'>Contact us</Link></i>
                <i ><Link to='/women' className='underline-nonetext-[1rem] font-[400]'>Women</Link></i>
                <i ><Link to='/men' className='underline-none text-[1rem] font-[400]'>Men</Link></i>
                

            </div>
            
        </footer>
    );
}

export default Footer;
