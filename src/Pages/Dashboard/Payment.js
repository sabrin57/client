import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheekFrom from './CheekFrom';


const stripePromise = loadStripe('pk_test_51MHruWLsWf1EFUEXoFpfoTxSnXnqs7OjSL5iyH3Dr7xZsCdKbMrviinRn25CM9Klw0XMWgZYQfHLIzGEH6iD7YaA00kWrR8OOV');

const Payment = () => {
    const { id } = useParams();
    const url = (`http://localhost:5000/booking/${id}`);
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2>Please Pay to Service Charge</h2>


            <div class="card w-96 bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <h2 class="card-title">Pay For {appointment?.treatmentName}</h2>
                    <p>you will get appointment on {appointment?.date} at {appointment?.slot} </p>
                    <p>Plase pay $ {appointment?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheekFrom appointment={appointment } />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;