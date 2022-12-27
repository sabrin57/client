import React from 'react';

const Booking = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-2xl image-full">         
            <div class="card-body bg-white ">             
                <p className='text-teal-500 text-xl font-bold  font-serif'>{name}</p>
                <p className='text-black font-serif'>{slots.length} {slots.length < 1 ? 'speace' : 'speaces'} available</p>
                <p className='text-black font-serif'>Price ${ price}</p>
                <div class="card-actions justify-center">                   
                    <label onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} class="btn btn-sm btn-warning" for="book-modal">Get Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Booking;