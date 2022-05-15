import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appoinment from '../../../assets/images/appointment.png';

const Appoinment = () => {
    return (
        <div style={{'background':`url(${appoinment})`}} className='lg:flex lg:px-24 mt-32 '>
            <div className='invisible lg:visible'>
                <img  style={{'width':'2050px', 'height':'520px', 'marginTop':'-130px'}} src={doctor} alt="" />

            </div>
            <div className='mt-2 lg:mt-24'>
                <p className='text-primary font-Open Sans font-bold'>Appoinment</p>
                <h1 className='text-2xl font-Open Sans text-white lg:mt-5'>Make an appoinment Today</h1>
                <p className='text-white lg:mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white bg-gradient-to-r lg:mt-8 from-primary to-secondary font-bold">Get Started</button>
            </div>
        </div>
    );
};

export default Appoinment;