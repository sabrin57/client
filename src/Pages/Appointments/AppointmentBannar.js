import React from 'react';
import doctor from '../../images/doctor.png';
import banner from '../../images/appointment.png'
import { Link } from 'react-router-dom';

const AppointmentBannar = () => {
    return (
        <section style={{ background: `url(${banner})`, height: '600px', }} className='flex  my-24 bg-blend-lighten'>
            <div className='flex-1 hidden lg:block '>
                <img className='-mt-36' src={doctor} alt="" />
            </div>
            <div className='flex-1 justify-center items-center justify-items-center my-32 p-8'>
                <h2 className='text-4xl text-white font-bold pb-3'>Make an Appoinment</h2>
                <p className='text-xl text-white pt-5 indent-8'>One of the mainstays of life is making and keeping appointments. Many people consider “an appointment” to mean a doctors visit or a job interview or other more formal. However, it is important to realize that such activities as meeting a friend for lunch or dinner, going to a concert with friends, or having work done on your flat are all appointments.</p>
                <button class=" btn btn-wid  btn-accent mt-8"><Link to="/appointment">Get AppointMent</Link></button>
            </div>
        </section>
    );
};

export default AppointmentBannar;