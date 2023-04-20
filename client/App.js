import React from 'react';
import Navbar from './components/global/Navbar';
import { useEffect } from 'react';
import {Routes, Route, useLocation} from "react-router-dom"
import Main from "./components/homepage/Main"
import ProductDetail from './components/productDetail';
import Checkout from './components/checkout/Checkout';
import Confirmation from './components/checkout/Confirmation';
import SignupLogin from "./components/SignUpLogin"
import Cart from "./components/global/Cart";
import User from "./components/auth/user"
import Menu from './components/global/menu';
import SizeChart from './components/SizeChart';
import AboutContact from "./components/AboutContact"

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
       
      <ScrollToTop />
      <Routes>
       <Route path="/" element={<Main/>}></Route>
       <Route path="/item/:itemId" element={<ProductDetail/>}></Route>
       <Route path="checkout" element={<Checkout />} />
       <Route path="checkout/success" element={<Confirmation/>} />
       <Route path="/signup" element= {<SignupLogin/>} />
       <Route path="/user" element= {<User/>} />
       <Route path="/sizechart" element={<SizeChart/>}/>
       <Route path="/contact" element={<AboutContact/>}/>
       </Routes>
       
       <Cart/>
       <Menu/>
    </div>
  );
};

export default App;
