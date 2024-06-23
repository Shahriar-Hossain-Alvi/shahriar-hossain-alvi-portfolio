import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row justify-between py-4 mx-2 gap-2 text-center md:text-left'>
            <h2> <FaRegCopyright className='inline' /> 2024. All rights reserved by Shahriar Hossain Alvi</h2>

            <h4 className='font-medium'>Developed by Shahriar Hossain Alvi</h4>
        </footer>
    );
};

export default Footer;