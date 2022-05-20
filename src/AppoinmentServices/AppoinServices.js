import React from 'react';

const AppoinServices = ({item, setServices}) => {
    
    const { name, slots } = item;
    
    return (
        <div class="card w-96 bg-base-100 shadow-xl items-center justify-center font-body px-12">
            <div class="card-body">
                <h2 class="card-title text-center text-xl text-primary">{name}</h2>
               
               <p className='text-center text-sm'>{slots.length} {slots.length>1?'SPACES':'SPACE'} AVAILABLE</p>
               <p className='text-center text-sm'>{slots[0]}</p>
                <div class="card-actions justify-end">
                <label onClick={()=>setServices(item)} for="my-modal" disabled={slots.length===0}  class="btn modal-button btn-primary font-body text-white bg-gradient-to-r from-primary to-secondary font-bold">BOOK APPOINMENT</label>
                    
                </div>
            </div>
        </div>
    );
};

export default AppoinServices;