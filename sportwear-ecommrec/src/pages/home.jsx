
import { Navigate, useNavigate } from 'react-router-dom';
import { Usecont } from '../context/context';


const Home = () => {
    const {products}=Usecont();
    const navigate=useNavigate()
 
    const handleBuy=(product)=>{
    
        navigate(`/buyproduct/${product.id}`);
        

    }

   
    return (
        <div  className='sm:my-auto sm:grid sm:grid-cols-3 sm:p-[2rem] gap-[20px]'>
            {products.map((x)=> <div key={x.id} className='sm:w-[300px] flex flex-col border border-gray-200 items-center'>
                <img src={x.image} alt={x.name} className='w-[150px]'/>
                <div className='flex justify-between flex-col gap-[10px] '>
                <p className='font-[500]'>{x.name}</p>
                
                <p className='font-[500]'>price:{x.price} $</p>
            
                </div>
              
                <div>
                    <button onClick={()=>{ handleBuy(x)}} className='btn w-[150px] my-4 border border-transparent bg-[blue] outline-none cursor-pointer rounded-[10px] hover:bg-amber-600 transition  duration-500 ease-in-out text-[#fff]'>buy </button>
                </div>
            </div>)
            }
    
           
        </div>
    );
}

export default Home;
