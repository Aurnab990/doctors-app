import React from 'react';

const AppoinServices = ({item}) => {
    
    const { name, slots } = item;
    
    return (
        <div class="card w-96 bg-base-100 shadow-xl items-center justify-center font-body px-12">
            <div class="card-body">
                <h2 class="card-title text-center text-xl text-primary">{name}</h2>
               
               <p className='text-center text-sm'>{slots}</p>
                <div class="card-actions justify-end">
                    <button class="w-full btn btn-primary font-body text-white bg-gradient-to-r from-primary to-secondary font-bold">BOOK APPOINMENT</button>
                </div>
            </div>
        </div>
    );
};

export default AppoinServices;