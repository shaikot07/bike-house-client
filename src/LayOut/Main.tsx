
import { Outlet } from 'react-router-dom';
import NavBar2 from '../Pages/Shared/Navbar/NavBar2';


const Main = () => {
    return (
        <div>
         <NavBar2></NavBar2>
            {/* <NavBar></NavBar> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;