import React from 'react';
import InfoCard from './InfoCard';
import clockicons from '../../icons/clock.svg';
import marker from '../../icons/marker.svg';
import phone from '../../icons/phone.svg';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 text-xl font-serif'>
            <InfoCard  bgClass={"bg-gradient-to-r from-cyan-500 to-blue-500"} CardTitle={"Opening Hours"} imgs={clockicons} ></InfoCard> 
            <InfoCard  bgClass={"bg-gradient-to-r from-indigo-500"} CardTitle={"Our Location"} imgs={marker} ></InfoCard> 
            <InfoCard  bgClass={"bg-gradient-to-r from-cyan-500 to-blue-500"} CardTitle={"Contact US"} imgs={phone}></InfoCard> 
        </div>
    );
};

export default Info;