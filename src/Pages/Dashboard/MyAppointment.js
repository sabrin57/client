import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const user = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`,{
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => res.json())
                .then(data => setAppointment(data));
        }

    }, [user])
    return (
        <div>
            <h3>My Appointment {appointment.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Pay</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((appoint, index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{appoint.patienName }</td>
                                    <td>{ appoint.date}</td>
                                    <td>{ appoint.slot}</td>
                                    <td>{ appoint.treatmentName}</td>
                                    <td>
                                        {(appoint.price && !appoint.pay) && <Link to={`/dashboard/payment/${appoint._id}`}><button className='btn btn-xs btn-warning' type="">Pay</button></Link>}
                                        {(appoint.price && appoint.pay ) && <Link to={`/dashboard/payment/${appoint._id}`}><button className='btn btn-xs btn-warning' type="">Paid</button></Link>}
                                    </td>
                                    <td><button className='btn btn-outline btn-accent btn-sm' type="text">Delete</button></td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;