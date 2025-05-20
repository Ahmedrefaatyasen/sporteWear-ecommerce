import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div  className='div text-[#fff] w-[100%] h-[500px] flex gap-[2rem] justify-center items-center flex-col p-[2rem] sm:flex sm:justify-center sm:items-center sm:flex-col sm:gap-[3rem] sm:h-[500px] sm:w-[100%] )]'>
            <p className='text-[#fff] text-[1.2rem] font-bold'> Ready to level up your workout?We have got what you need!</p>
            <Link to='/home' className='w-[200px] bg-[red]  border-[tranparent] text-[white] text-center rounded-[10px]'>Shop now</Link>
        </div>
    );
}

export default Home;
