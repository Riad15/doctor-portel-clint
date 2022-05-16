import React from 'react';
import banner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({ setDate }) => {

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img class="max-w-sm rounded-lg shadow-2xl" src={banner} alt='' />
                <div>
                    <DayPicker />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;