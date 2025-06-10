import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Usecont } from "../context/context";


const Buyproduct = () => {


    const navigate=useNavigate();
    const {totalPrice,cartarray}=Usecont();
    const cardNumberRef = useRef();
    const expiryRef = useRef();
    const cvvRef = useRef();
    // This function is called when the user clicks the "pay" button
    const handlePay=()=>{
        
        if(cardNumberRef.current.value !== '' && expiryRef.current.value !== '' && cvvRef.current.value !== '' && cardNumberRef.current.value.length >= 16 && expiryRef.current.value.length >= 5 && cvvRef.current.value.length >= 3) {
    
        cartarray.splice(0, cartarray.length); // Clear the cart after payment
        // Here you can implement the payment logic
        // For example, you can send the payment details to your backend server
        // or use a payment gateway API to process the payment.
        // After successful payment, you can navigate to a success page or show a success message.
        window.alert("Payment successful!");
        navigate('/');
            }else{
                window.alert("Please fill in all fields correctly.");
            }
    };

    return (
        <form className='mt-[2rem] mb-[30px] w-[400px] h-[600px] shadow-lg shadow-[#292323] m-auto flex flex-col items-center border border-[#292323] p-[1rem] gap-[2rem]'>
           <h1>payment</h1>
           <h2>total price:{totalPrice}</h2>

            <input type="text" id="name" className='w-[200px] border border-amber-300 text-center outline-0' placeholder='your name' required/>
                <input ref={cardNumberRef} type="text" id="cardNumber" className='w-[200px] border border-amber-300 text-center outline-0' placeholder='card number' required/>
                <input ref={expiryRef} type="text" id="expiry" className='w-[200px] border border-amber-300 text-center outline-0' placeholder='MM/YY' required/>
                <input ref={cvvRef} type="text" id="cvv" className='w-[200px] border border-amber-300 text-center outline-0' placeholder='cvv' required/>
                <button  type="submit" onClick={()=>{handlePay()}} className='w-[200px]  text-center outline-0 cursor-pointer border border-[#292323] rounded-[10px]'>pay</button>


        </form>
    );
}

export default Buyproduct;
