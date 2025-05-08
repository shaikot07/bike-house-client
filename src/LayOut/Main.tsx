
import { Outlet } from 'react-router-dom';
import NavBar2 from '../Pages/Shared/Navbar/NavBar2';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
         <NavBar2></NavBar2>
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default Main;