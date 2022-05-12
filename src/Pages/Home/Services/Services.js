import React from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    return (
        <div className='mt-5 lg:mt-24'>
            <h1 className='uppercase text-center text-primary font-bold font-Open Sans'>Our Services</h1>
            <p className='text-center text-3xl font-Open Sans mt-2 lg:mt-4'>Services We Provide</p>
            <ServicesCart></ServicesCart>
        </div>
    );
};

export default Services;