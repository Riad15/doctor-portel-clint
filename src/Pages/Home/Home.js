import React from 'react';
import Bannar from './Bannar';
import Info from './Info';
import MakeAppiontment from './MakeAppiontment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Info></Info>
            <Services></Services>
            <MakeAppiontment></MakeAppiontment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;