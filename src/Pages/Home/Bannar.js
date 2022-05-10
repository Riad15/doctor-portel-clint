import React from 'react';
import chare from '../../assets/images/chair.png'

const Bannar = () => {
    return (
        <div className="hero min-h-screen px-14 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chare} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here !</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;