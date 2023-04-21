import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';


const Main=()=>{
 return (
    <div>
        main
        <br/>
        <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Products />} />
        </Routes>

    </div>
 )
}

export default Main;