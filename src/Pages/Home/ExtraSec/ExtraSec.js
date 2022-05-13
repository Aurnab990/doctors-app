import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const ExtraSec = () => {
    return (
        <div class="hero min-h-screen px-24 mt-2 lg:mt-8">
            <div class="hero-content flex-col lg:flex-row">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-12'>
                    <h1 class="text-5xl font-bold font-Open Sans">Exceptional Dental <br></br> Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraSec;