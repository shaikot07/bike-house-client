import React from 'react';
import Banner from '../Banner/Banner';
import SecondSectionCart from '../secondSectionCart/SecondSectionCart';
import TopBrand from '../topBrand/TopBrand';
import FeaturedProduct from '../Featured Product/FeaturedProduct';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <SecondSectionCart/>
           <FeaturedProduct></FeaturedProduct> 
           <TopBrand/>
        </div>
    );
};

export default Home;