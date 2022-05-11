import React from 'react';
import Bannar from './Bannar';
import ContactUs from './ContactUs';
import Footer from './Footer';
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
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;