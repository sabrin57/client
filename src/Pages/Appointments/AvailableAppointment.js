import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Booking from './Booking';
import BookModal from './BookModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const dateformate = format(date ,'PP')
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${dateformate}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [dateformate])
    return (
        <div>
            <h3 className='text-center text-4xl uppercase text-green-400 p-3 m-5'>Available date on {format(date, 'PP')} </h3>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-10 text-black'>
                {
                    services.map(service => <Booking
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {
                treatment && <BookModal date={date} treatment={treatment} setTreatment ={setTreatment}></BookModal>
            }
        </div>
    );
};

export default AvailableAppointment;