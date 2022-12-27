import React, { useState }  from 'react';
import Appointment from './Appointment';
import AvailableAppointment from './AvailableAppointment';
import Footer from '../Shared/Footer/Footer' 

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Appointment date ={date} setDate={setDate}></Appointment>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;