import React from 'react';
import florida from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whiteteeth from '../../../assets/images/whitening.png';


const ServicesCart = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 px-12 py-2 gap-8 mt-2 lg:mt-11'>
            <div class="card w-96 bg-base-100 shadow ">
            <figure class="px-10 pt-10">
                <img src={florida} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-semibold font-Open Sans ">Flouride Treatment</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow">
            <figure class="px-10 pt-10">
                <img src={cavity} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-semibold font-Open Sans ">Cavity Filling</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow">
            <figure class="px-10 pt-10">
                <img src={whiteteeth} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-semibold font-Open Sans ">Teeth Whitening</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
        </div>
    );
};

export default ServicesCart;