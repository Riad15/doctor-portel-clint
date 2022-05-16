import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import BookingAppointment from './BookingAppointment';

const Appointment = () => {

    return (
        <div>
            <AppoinmentBanner ></AppoinmentBanner>
            <BookingAppointment></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;