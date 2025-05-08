
import Banner from '../Banner/Banner';
import SecondSectionCart from '../secondSectionCart/SecondSectionCart';
import TopBrand from '../topBrand/TopBrand';
import FeaturedProduct from '../Featured Product/FeaturedProduct';
import ShowroomBikes from '../Showroom Bikes/ShowroomBikes';
import ServicesSection from '../servicesSection/ServicesSection';
import Testimonials from '../testimoniyal/Testimonials';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <SecondSectionCart/>
           <FeaturedProduct/>
           <TopBrand/>
           <ShowroomBikes/>
           <ServicesSection/>
           <Testimonials/>
           {/* <Footer/> */}
        </div>
    );
};

export default Home;