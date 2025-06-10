import { createContext,useContext,useState } from "react";
import axios from 'axios';
import  { useEffect } from 'react';

const auth=createContext()


const Context = ({children}) => {

    const[text,settext]=useState("add to cart");//to change the text in the add to cart button;
    
    const [increase,setIncrease]=useState(""); //to increase the qauntity of the product in the cart
    const [users,setusers]=useState([]); //users who login the site
    const[admins,setadmins]=useState([]);
    const[totalPrice,setTotalPrice]=useState(0)
   
    
    
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
   const addToCart=(product)=>{
    const existingProduct = cartarray.find((item) => item.id === product.id);
    if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        setcartarray((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (item.id === existingProduct.id) {
                    return {...item, quantity: item.quantity + 1 }; // Increase quantity by 1
                }
                return item;
            });
            return updatedCart;
        });
         // Ensure totalPrice is a string with two decimal places
    } else {
        // If the product is not in the cart, add it with the specified quantity
        setcartarray((prevCart) => [...prevCart, { ...product, quantity: 1 }]);

    }

   }
   const handleDecrease=(product)=>{
    
    // This function is called when the user clicks the "decrease quantity" button
    const existingProduct = cartarray.find((item) => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
        // If the product is already in the cart and quantity is more than 1, decrease its quantity
        setcartarray((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (item.id === existingProduct.id) {
                    return {...item, quantity: item.quantity - 1 }; // Decrease quantity by 1
                }
                return item;
            });
            return updatedCart;
        });

    }else{
        // If the product is not in the cart or quantity is 1, remove it from the cart
        setcartarray((prevCart) => prevCart.filter((item) => item.id !== product.id));
    }
};
   const getTotalPrice=()=>{
    const price=cartarray.map((item)=>{return Number(item.price) * Number(item.quantity)});
    
    
    
    // Calculate the total price by multiplying the price of each item by its quantity
    const total=Number(price.reduce((curr,acu)=>curr+acu,0))
    console.log(total);
    
    setTotalPrice(total);
    
 
   }
    return (
        <auth.Provider value={{handleDecrease,totalPrice,getTotalPrice,settext,addToCart,text,increase,setIncrease,email,setemail,pass,setpass,users,setusers,admins,setadmins,products,setproducts,open ,setopen,cartarray,setcartarray,buy,handleUsers}}>
            {children}
        </auth.Provider>
    );
}

export default Context;
export const Usecont=()=>{
    return useContext(auth)
}
