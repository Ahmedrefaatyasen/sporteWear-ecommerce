import { Usecont } from '../context/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


const Login = () => {
    const{email,admins,setadmins,setemail,pass,setpass}=Usecont();
    
    const navigate=useNavigate();
    useEffect(()=>{
        const get=async()=>{
               try{
                axios.get("https://e-commrce-back-end-production.up.railway.app/admins/").then((res)=>setadmins(res.data));
             
               }catch(err){
                  console.log(err);
               }
        }
        get()
    },[setadmins])
    
    
    const handle= async()=>{ 
          if(admins.length>0&& email===admins[0].email && pass===admins[0].password){
               localStorage.setItem("adminEmail",JSON.stringify(email));
             localStorage.setItem("adminPass",JSON.stringify(pass));
            navigate('/dashboard');        
        }else{
              try{
        axios.post("http://localhost:4000/users/",{
            email:email,
            password:pass,

        })
       
    }catch(err){
            console.log(err)
        }
            navigate('/')
        }
          
    
        
      

    }
    return (
        
            <form className='mb-[30px] mt-[2rem] w-[400px] h-[400px] shadow-lg shadow-[#292323] m-auto flex flex-col items-center border border-[#292323] p-[1rem] gap-[2rem]'>
              <lable/>Email:  <input className='sm:w-[200px] sm:text-center sm:outline-0' onChange={(e)=>setemail(e.target.value)} type='email' placeholder='Email...'/>
              <lable/>Password:  <input onChange={(e)=>setpass(e.target.value)} className='sm:w-[200px] sm:text-center sm:outline-0' type='password' placeholder='password...'/>
                <button onClick={()=>handle()} className='sm:w-[200px] sm:text-center sm:outline-0 cursor-pointer border border-[#292323] rounded-[10px]' type='submit'>submit</button> 
            </form>
        
    );
}

export default Login;
