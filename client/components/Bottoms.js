import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import slice


const Bottoms = () => {
    const top = useSelector();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch();
    }, [dispatch]);

    return (
        <div>
            <h2>All Bottoms</h2>
            <br/>
            {/* map through products? */}
        </div>
    );
};

export default Bottoms;