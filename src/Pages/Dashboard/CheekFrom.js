import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheekFrom = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardEror, setcardEror] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { price } = appointment;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',        
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({price}),

        })
            .then(res => res.json() )
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        setcardEror(error?.message || '');


    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-warning btn-sm m-10 ' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
            {
                cardEror && <p className='text-red-500'>{cardEror} </p>
            }


        </div>
    );
};


export default CheekFrom;