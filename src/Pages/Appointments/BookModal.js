import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots,price } = treatment;
    const formatDate = format(date, 'PP');
    const bookinghandle = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const bookings = {
            treatmentId: _id,
            treatmentName: name,
            date: formatDate,
            slot,
            price,
            patient: user.email,
            patienName: user.displayName,
            number: event.target.number.value,

        }
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formatDate} at ${slot}`);
                }
                else {
                    toast.error(`Appointment is Already fixed, ${data.bookings?.date} at ${data.bookings?.slot}`);

                }
                setTreatment(null);
            })
    }

    const [user] = useAuthState(auth);
    return (
        <div className='bg-base-200'>
            <input type="checkbox" id="book-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="book-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Booking For: {name}</h3>

                    <form onSubmit={bookinghandle} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>
                                )
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name="email" disabled value={user?.email || ''} class="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="text" name="number" placeholder="Enter Your Number" class="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" Value="Submit" class="btn btn-warning w-full max-w-xs" />

                    </form>

                </div>
            </div>
        </div>

    );
};

export default BookModal;