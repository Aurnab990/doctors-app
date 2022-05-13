import React from 'react';
import chair from '../../../assets/images/chair.png';
import background from '../../../assets/images/bg.png';



const Header = () => {
    return (
        <div style={{'background': `url(${background})`, 'backgroundSize':'width: 200px'}}>
            <div class="hero min-h-screen px-12  ">
            <div class="hero-content flex-col gap-10 lg:flex-row-reverse">
                <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts <br></br><span>Here</span></h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary font-bold">Get Started</button>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Header;