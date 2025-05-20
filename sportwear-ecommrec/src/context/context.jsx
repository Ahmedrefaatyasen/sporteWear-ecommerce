import { createContext,useContext,useState } from "react";
import axios from 'axios';
import  { useEffect } from 'react';

const auth=createContext()


const Context = ({children}) => {
    const[totalPrice,settotalPrice]=useState("");//to use in the cart
    const[qauntity,setqauntity]=useState("");//to use in the cart
    const [users,setusers]=useState([]); //users who login the site
    const[admins,setadmins]=useState([]);
    
    
    const[open,setopen]=useState(false) ; //to control in the cart
    const[products,setproducts]=useState([]); //main products array
    const[cartarray,setcartarray]=useState([]);//
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
        //to get products from the api
        useEffect(()=>{
            const getUsers=async()=>{
                try{
                    axios.get("https://e-commrce-back-end-production.up.railway.app/users/").then((res)=>setusers(res.data))
                }catch(err){
                    console.log(err);
                }
            };
        const getProducts=async()=>{
            try{
                axios.get( "https://e-commrce-back-end-production.up.railway.app/products/").then((res)=>setproducts(res.data))
               
            }catch(err){
                   console.log(err);
            };
            
        }
        getProducts();
        getUsers();
    },[products,users]);
    
    // function to push products in the cart array
   const buy=(product)=>{
    cartarray.push(product)

   }
   //function to delete users 
   const handleUsers=async(id)=>{
    try{
       await axios.delete(`https://e-commrce-back-end-production.up.railway.app/users/${id}`).then((res)=>setusers(res.data))
    }catch(err){
        console.log(err);
    }

    const updatedUsers=users.filter((user)=>{return user.id !==id})
    setusers([...updatedUsers])
    console.log(users)
   }
    return (
        <auth.Provider value={{email,setemail,pass,setpass,users,setusers,admins,setadmins,settotalPrice,qauntity,setqauntity,totalPrice,products,setproducts,open ,setopen,cartarray,setcartarray,buy,handleUsers}}>
            {children}
        </auth.Provider>
    );
}

export default Context;
export const Usecont=()=>{
    return useContext(auth)
}
