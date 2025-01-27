import React from 'react';
import Banner from '../Banner/Banner';
import SecondSectionCart from '../secondSectionCart/SecondSectionCart';
import TopBrand from '../topBrand/TopBrand';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <SecondSectionCart/>
           <TopBrand/>
        </div>
    );
};

export default Home;