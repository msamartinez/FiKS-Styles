import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// insert slices

const Products = () => {
    const tops = useSelector();
    const bottoms = useSelector();
    const dispatch = useDispatch;

    useEffect(() => {
        dispatch();
    }, [dispatch]);

    return (
        <div>
            <h2>All Products</h2>
        </div>
    );
};

export default Products;
