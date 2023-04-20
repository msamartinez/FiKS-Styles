import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import

const Tops = () => {
    const top = useSelector();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch();
    }, [dispatch]);

    return (
        <div>
            <h2>All Tops</h2>
            <br/>
            {/* map through products? */}
        </div>
    );
};

export default Tops;