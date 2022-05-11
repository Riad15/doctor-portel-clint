import React from 'react';

const TestimonialCart = (props) => {
    const { name, img, address, comment } = props.carts;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-4">
            <div className="card-body">
                <p>{comment}</p>
                <div className='flex  items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;