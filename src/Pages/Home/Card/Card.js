import React from 'react';
import clock  from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Card = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 px-12 py-2 gap-4  '>
            <div class="text-white card card-side bg--100 shadow-xl p-4 bg-gradient-to-r from-primary to-secondary">
            <figure><img src={clock} alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title font-bold ">Opening Hours</h2>
                <p>Lorem Ipsum has been the industry's </p>
                
            </div>
        </div>
        <div class="text-white card card-side bg--100 shadow-xl p-4 bg-gradient-to-r from-neutral to-neutral">
            <figure><img src={marker} alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title font-bold">Visit our location</h2>
                <p>Lorem Ipsum has been the industry's </p>
                
            </div>
        </div>
        <div class="text-white card card-side bg--100 shadow-xl p-4 bg-gradient-to-r from-primary to-secondary">
            <figure><img src={phone} alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title font-bold">Contact us now</h2>
                <p>Lorem Ipsum has been the industry's </p>
                
            </div>
        </div>
        </div>
    );
};

export default Card;