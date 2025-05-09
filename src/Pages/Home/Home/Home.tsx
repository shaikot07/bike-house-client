
import Banner from '../Banner/Banner';
import SecondSectionCart from '../secondSectionCart/SecondSectionCart';
import TopBrand from '../topBrand/TopBrand';
import FeaturedProduct from '../Featured Product/FeaturedProduct';
import ShowroomBikes from '../Showroom Bikes/ShowroomBikes';
import ServicesSection from '../servicesSection/ServicesSection';
import Testimonials from '../testimoniyal/Testimonials';

import WhyUs from '../../ExtraPage/WhyUs';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <SecondSectionCart/>
           <FeaturedProduct/>
           <TopBrand/>
           <ShowroomBikes/>
           <ServicesSection/>
           <WhyUs/>
           <Testimonials/>
           {/* <Footer/> */}
        </div>
    );
};

export default Home;