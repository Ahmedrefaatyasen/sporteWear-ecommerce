
import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Footer from './pages/footer';
import Login from './pages/login';
import Cart from './pages/cart';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Protectedroute from './pages/protectedroute';
import Dashboard from './pages/Dashboard';
import Context from './context/context';
import HeroSection from './pages/hero';
import Women from './pages/women';
import Men from './pages/men';
import Kids from './pages/kids';
import Buyproduct from './pages/buyproduct';
import Addproduct from './pages/addproduct';
import Allproducts from './pages/allproducts';
import Contactus from './pages/contactus';



function App() {
  

  return (
    <BrowserRouter>
    <Context>
    <Navbar/>
    <Cart/>
   
     
    

  
    <Routes>
     <Route path='/home'  element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/women' element={<Women/>}/>
     <Route path='/men' element={<Men/>}/>
     <Route path='/kids' element={<Kids/>}/>
     <Route path='/contactus' element={<Contactus/>}/>
     <Route path='/buyproduct/:id' element={<Buyproduct/>}/>
     <Route path='/addproduct' element={<Addproduct/>}/>
     <Route path='/allproducts' element={<Allproducts/>}/>
     <Route path='/dashboard' element={<Protectedroute><Dashboard/></Protectedroute>}/>
    </Routes>
    
    <HeroSection/>
         
   
   
    
   
   
    <Footer/>
    </Context>
      
    </BrowserRouter>
  )
}

export default App
