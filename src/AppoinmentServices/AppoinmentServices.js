import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import AppoinServices from './AppoinServices';

const AppoinmentServices = ({selected}) => {
    const [items, setItems] = useState([]);
    const [services, setServices] = useState([]);

    

    useEffect( ()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-12'>
            {
                items.map(item => <AppoinServices
                key = {item._id}
                item = {item}
                setServices = {setServices}
                
                
                ></AppoinServices>)
            }
        </div>
        {services && <Booking selected={selected} services ={services}></Booking>}
        </div>
    );
};

export default AppoinmentServices;