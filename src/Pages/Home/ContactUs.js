import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className="mx-8 rounded">
            <div className='text-center'>
                <p className=' text-secondary font-bold pt-3'>Contact Us</p>
                <h1 className='text-3xl font-bold text-white '>Stay connected with us</h1>
                <div className='flex flex-col justify-center items-center space-y-4 m-4 p-4'>
                    <input type="text" placeholder="email address" class="input input-bordered input-accent w-full max-w-xs" />
                    <input type="text" placeholder="Subject" class="input input-bordered input-accent w-full max-w-xs" />
                    <textarea class="textarea textarea-accent w-full max-w-xs" placeholder="Your massage"></textarea>
                </div>
                <div className=" flex justify-center pb-5">
                    <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
                </div>

            </div>

        </div>
    );
};

export default ContactUs;