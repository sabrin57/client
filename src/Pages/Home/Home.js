import React from 'react';
import Appointment from '../Appointments/Appointment';
import AppointmentBannar from '../Appointments/AppointmentBannar';
import Doctors from '../Doctors/Doctors';
import AllServices from '../Services/AllServices/AllServices';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import Info from './Info';
import Testimonial from './Testimonial';

const Home = () => {
   
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <AllServices></AllServices>
            <Doctors></Doctors>
            <AppointmentBannar></AppointmentBannar>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;