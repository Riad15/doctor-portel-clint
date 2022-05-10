import React from 'react';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
            <div class="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure><img className='w-20 p-2' src={clock} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white"> Opening Hours !</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-accent shadow-xl">
                <figure><img className='w-20 p-2' src={marker} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">Visit Our Location!</h2>
                    <p className='text-white'>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure><img className='w-20 p-2' src={phone} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">Contact Us Now !</h2>
                    <p className='text-white'>01940832873</p>
                </div>
            </div>

        </div>
    );
};

export default Info;