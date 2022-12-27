import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
   
    return (
        <div class="card card-side bg-base-100 shadow-xl bg-blue-200">
            <figure><img src={doctor.image} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title">{ doctor.name}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-center font-bold">
                    <button class="btn btn-primary bg-gradient-to-r from-cyan-800 to-blue-500 mt-5 hover:from-emerald-500 hover:to-blue-900"><Link to="/appointment">Get Appointment</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;