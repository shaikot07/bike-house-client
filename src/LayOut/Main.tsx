
import { Outlet } from 'react-router-dom';
import NavBar2 from '../Pages/Shared/Navbar/NavBar2';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
         <NavBar2></NavBar2>
            {/* <NavBar></NavBar> */}
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
          
        </div>
    );
};

export default Main;