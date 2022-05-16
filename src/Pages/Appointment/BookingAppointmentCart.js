import React from 'react';

const BookingAppointmentCart = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body mx-auto">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots[0]}</p>
                <p className='text-center'>{slots.length} SPACES AVAILABLE</p>
                <div class="card-actions justify-center">
                    <label for="booking-modal"
                        onClick={() => setTreatment(service)} class="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default BookingAppointmentCart;