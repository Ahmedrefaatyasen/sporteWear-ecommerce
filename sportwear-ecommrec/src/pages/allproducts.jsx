import axios from "axios";
import { Usecont } from "../context/context";

const Allproducts = () => {
    const{products,setproducts}=Usecont()
    const handle=async(id)=>{
       try{
     await   axios.delete(`https://e-commrce-back-end-production.up.railway.app/products/${id}`).then((res)=> setproducts(res.data));
       }catch(err){
        console.log(err);
       }
       products.filter(product=>product.id!==id);
    }
    return (
        <div className="mb-3.5">
           <table  className='mr-auto text-[black]  ml-auto border border-amber-200'>
            <thead className='text-center border border-amber-400'>
                <th className='border-r border-amber-400'>id</th>
                <th  className='border-r border-amber-400'>name</th>
                <th className='border-r border-amber-400'>price</th>
            </thead>
            {products.map((product)=><tr key={product.id} className='border-l text-center border-amber-400'>
                <td className='border border-amber-400'>{product.id}</td>
              <td className='border border-amber-400'> {product.name}</td> 
              <td className='border border-amber-400'>{product.price}</td>
              <td className="border border-amber-200 p-[19px]"> <button onClick={()=>handle(product.id)}  className="w-[70px] border border-amber-300 rounded-[5px] cursor-pointer " >delete</button></td>
            </tr>)}
            </table>
            
        </div>
    );
}

export default Allproducts;
