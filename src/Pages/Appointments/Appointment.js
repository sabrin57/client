import React from 'react';
import Chair from '../../images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointment = ({date, setDate}) => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content grid lg:grid-cols-2 sm-grid-cols-1 mr-10 justify-center">
                    <img className='w-50' src={Chair} alt="banner" />
                    <div className='justify-items-center justify-center px-12'>
                        <h1 className='text-xl font-bold text-teal-600 font-serif'>Take Your appointment With in Calender</h1>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;