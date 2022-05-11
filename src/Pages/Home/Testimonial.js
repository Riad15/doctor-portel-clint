import React from 'react';
import quat from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCart from './TestimonialCart';

const Testimonial = () => {
    const Reviews = [
        {
            _id: 1,
            img: people1,
            name: "Winson Herry",
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 1,
            img: people2,
            name: "Winson Herry",
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id: 1,
            img: people3,
            name: "Winson Herry",
            address: "California",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gep-4 '>
                {
                    Reviews.map(data => <TestimonialCart
                        key={data._id}
                        carts={data}
                    ></TestimonialCart>)

                }

            </div>
        </div>
    );
};

export default Testimonial;