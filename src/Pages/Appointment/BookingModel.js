
import { format } from 'date-fns/esm';
import React, { useState } from 'react';

const BookingModel = ({ treatment }) => {
    const { name, slots } = treatment;
    const [date1, setDate] = useState(new Date())

    const handleBooking = (event) => {
        const slot = event.target.slot.value;
        console.log(slot);
        event.preventDefault();
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-secondary">
                        booking confirmed for : {name}</h3>
                    <form action="" onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center m-4 '>
                        <input type="text" disabled value={format(date1, 'pp')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary input-bordered w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;