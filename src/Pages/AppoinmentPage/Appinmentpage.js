import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import AppoinmentServices from '../../AppoinmentServices/AppoinmentServices';
import AppoinServices from '../../AppoinmentServices/AppoinServices';
import Booking from '../../Booking/Booking';



const Appinmentpage = () => {
    const [selected, setSelected] = React.useState(new Date());
   


    return (
        <div>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:gap-8 lg:mb-12 lg:flex-row-reverse">
                <img src={chair} class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt="dental chair" />
                <div>
                    <DayPicker className=''
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        
                        
                    />
                </div>
                
            </div>
            
            
        </div>
        <p className='text-lg text-primary text-center font-Opens Sans'>Avaiable Appoinments on {format(selected, 'PP')}</p>
        <AppoinmentServices selected={selected}></AppoinmentServices>
        
        </div>
    )


};

export default Appinmentpage;