import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchSingleProduct } from '../../store/productSlice';

const Products = () => {
    const allProducts = useSelector(fetchProducts);
    const product = useSelector(fetchSingleProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch, id]);

    return (
        <div>
            <h2>All Products</h2>
            <br/>
            {allProducts && allProducts.length
            ? allProducts.map((product) => (
                <div key ={product.id}>
                    <Link 
                    to={`/products/${product.id}`}key={`All Products: ${product.id}`}>
                        <img src={product.imageUrl}/>
                        <h2>{product.name}</h2>
                    </Link>
                </div>
            ))
            :null}
        </div>
    );
};

export default Products;
