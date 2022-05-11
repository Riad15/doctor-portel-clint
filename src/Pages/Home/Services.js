import React from 'react';
import ServiceCart from './ServiceCart';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import witening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            about: "this service is best quality .if u want this contact with us."
        },
        {
            _id: 2,
            img: cavity,

            name: "Fluoride Treatment",
            about: "this service is best quality .if u want this contact with us."
        },
        {
            _id: 3,
            img: witening,

            name: "Fluoride Treatment",
            about: "this service is best quality .if u want this contact with us."
        }
    ]
    return (
        <div className='mx-6 my-12'>
            <h1 className='text-[20px] font-bold text-center text-secondary'>Our Services</h1>
            <p className='text-center text-[36px]'>Service We Provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gep-4 lg:ml-8 my-4 '>
                {
                    services.map(data => <ServiceCart
                        key={data._id}
                        services={data}
                    ></ServiceCart>)

                }
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl px-24 py-10">
                <figure><img className='w-[28rem]' src={treatment} alt="Album" /></figure>
                <div className="card-body align-middle">
                    <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">GET STARTED</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;