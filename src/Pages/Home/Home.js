import React from 'react';
import Appoinment from './Appoinment/Appoinment';
import Card from './Card/Card';
import ExtraSec from './ExtraSec/ExtraSec';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Card></Card>
            <Services></Services>
            <ExtraSec></ExtraSec>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;