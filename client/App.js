import React from 'react';
import Navbar from './components/global/Navbar';
import { useEffect } from 'react';
import {BrowserRouter, Routes,Route,useLocation} from "react-router-dom"
import './index.css';
import Main from "./components/homepage/Main"
import ProductDetail from './components/productDetail';
import Checkout from './components/checkout/Checkout';
import Confirmation from './components/checkout/confirmation';
import SignupLogin from "./components/SignUpLogin"
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
      <BrowserRouter>
      <Navbar />
      <ScrollToTop/>

      <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/item/:itemId" element={<ProductDetail/>}></Route>
      <Route path="checkout" element={<Checkout />} />
       <Route path="checkout/success" element={<Confirmation/>} />
       <Route path="/signup" component= {<SignupLogin/>} />

  {/* <Route path="/user" component={UserHome} />
  <Route path="/admin" component={AdminHome} />  */}
       </Routes>
       
       <Cart/>
       <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
