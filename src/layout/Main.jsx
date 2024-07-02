import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {

    return (
        <div className='font-raleway bg-gray-50'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;