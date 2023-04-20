import React from 'react';
import Navbar from './components/global/Navbar';
import { useEffect } from 'react';
import {Routes,Route,useLocation} from "react-router-dom"
import './index.css';
import Main from "./components/homepage/Main"
import ProductDetail from './components/productDetail';
import Checkout from './components/checkout/Checkout';
import Confirmation from './components/checkout/confirmation';
import SignupLogin from "./components/SignUpLogin"
import Cart from "./components/global/cart";
import User from "./components/auth/user"


const ScrollToTop = ()=>{
  const {pathname}=useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  return null 
}


const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>

      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/item/:itemId" element={<ProductDetail/>}></Route>
      <Route path="checkout" element={<Checkout />} />
       <Route path="checkout/success" element={<Confirmation/>} />
       <Route path="/signup" component= {<SignupLogin/>} />
       <Route path="/user" component= {<User/>} />
       </Routes>
       
       <Cart/>
  
    </div>
  );
};

export default App;
