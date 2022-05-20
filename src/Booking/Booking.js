import { format } from 'date-fns';
import React from 'react';

const Booking = ({ services, selected }) => {
    const { name, slots } = services;
    return (
        <div className='px-12'>

            <input type="checkbox" id="my-modal" class="modal-toggle" />



            <div class="modal">
                <div class="modal-box relative">




                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg ">{name}</h3>
                    <p className='text-lg font-bold bg-gray-300 p-2 rounded-lg mt-8 font-Opens Sans w-4/5'> {format(selected, 'PP')}</p>

                    <select class="select select-bordered text-black bg-gray-300 w-4/5 mt-5 mb-5 ">
                    
                    {
                            slots?.map(slot =><option 
                                key={slot._id}
                                value={slot}>{slot}</option>)
                        }
                    </select>

                    <div className='justify-items-center'>
                        <div class="form-control w-full ">
                            <input type="text" placeholder="full-name" class="input input-bordered  w-4/5" />
                        </div>

                        <div class="form-control w-full mt-4">
                            <input type="text" placeholder="Phone number" class="input input-bordered w-4/5" />
                        </div>

                        <div class="form-control w-full mt-4 ">
                            <input type="text" placeholder="Email" class="input input-bordered  w-4/5" />
                        </div>
                    </div>



                    <div class="modal-action">
                        <label for="my-modal" class="btn modal-button btn-primary font-body text-white bg-gradient-to-r from-primary to-secondary font-bold w-4/5 mr-24">BOOK APPOINMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;