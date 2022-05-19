import React, { useEffect, useState } from 'react';
import AppoinServices from './AppoinServices';

const AppoinmentServices = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-12'>
            {
                items.map(item => <AppoinServices
                key = {item._id}
                item = {item}
                
                
                ></AppoinServices>)
            }
        </div>
    );
};

export default AppoinmentServices;