import React, { useEffect, useState} from 'react';


const AboutContact = () => {


    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch('/api')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    
    return (
        <div>
        <h1>About</h1>
        <p>Bacon ipsum dolor amet short ribs brisket venison rump drumstick </p>
        <h1>Contact</h1>
        <p>Say hi to us.. not sure where or when but say hi!</p>
        <h1>API</h1> //! not sure about this but will double check
        <p>API data: {JSON.stringify(data)}</p>
        </div>
    );
    };

export default AboutContact;







