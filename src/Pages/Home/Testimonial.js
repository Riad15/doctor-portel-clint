import React from 'react';
import quat from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='mx-[56px]'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-left text-secondary font-bold'>TESTIMONIAL</p>
                    <h1 className='text-3xl font-bold text-left'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-[97px] lg:w-[192px]' src={quat} alt="" />
                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Testimonial;