import React from 'react';

const ServiceCart = (props) => {
    const { name, img, about } = props.services;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default ServiceCart;