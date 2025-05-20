import { Navigate} from 'react-router-dom';
import { Usecont } from '../context/context';

const Protectedroute = ({children}) => {
 
   if(localStorage.getItem("adminEmail")&&localStorage.getItem("adminPass")){
    return children
   }else{
   return  <Navigate to='/' />
   }
}

export default Protectedroute;
