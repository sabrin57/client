import React from 'react';
import Doctor from './Doctor';
import doctorimg1 from '../../images/doctor-1.png';
import doctorimg2 from '../../images/doctor-2.png';
import doctorimg3 from '../../images/doctor-3.png';

const Doctors = () => {
    const doctors = [
        {
            _id: 1,
            name: 'Dany ALbez',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they are',
            image:doctorimg1,
            location: 'Australia'
        },
        {
            _id: 2,
            name: 'Mark Jukerbarg',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they are',
            image:doctorimg2,
            location: 'Australia'
        },
        {
            _id: 3,
            name: 'Stepen rocks',
            description: 'Awesome Service provided they are Awesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they areAwesome Service provided they are',
            image:doctorimg3,
            location: 'Australia'
        }
    ]
    return (
       
        <div className='doctors-section my-10'>
            <div>
                <h3 className='text-center text-5xl  text-blue-400 font-bold uppercase'>Meet Our Doctors</h3>
                <h2 className='text-center text-3xl font-bold uppercase'>Choice Your Doctors</h2>
            </div>
            <div  className='grid lg:grid-cols-3 gap-4  my-5 '>
            {
                doctors.map(doctor => <Doctor
                    key={'_id'}
                    doctor ={doctor}
                ></Doctor>)
            }
            </div>
           
        </div>
    );
};

export default Doctors;