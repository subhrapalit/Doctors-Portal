import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>

            <Banner></Banner>
            <Services></Services>
            <FAQ></FAQ>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;