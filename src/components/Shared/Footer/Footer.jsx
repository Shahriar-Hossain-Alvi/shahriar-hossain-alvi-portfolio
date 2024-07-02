import { FaRegCopyright } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import webDevelopmentCertificateImg from "../../../assets/images/webDevelopmentCertificate.jpg"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Footer = () => {
    return (
        <footer className='pt-10 bg-[#080808] text-white'>
            <div className='footer px-10'>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>

                    <ScrollLink className="cursor-pointer" to="about" smooth={true} duration={500}>About Me</ScrollLink>

                    <ScrollLink className="cursor-pointer" to="qualification" smooth={true} duration={500}>Qualification</ScrollLink>

                    <ScrollLink className="cursor-pointer" to="projects" smooth={true} duration={500}>Projects</ScrollLink>
                </nav>

                <div>
                    <h6 className="footer-title">Certificates</h6>
                    <PhotoProvider>
                        <PhotoView src={webDevelopmentCertificateImg}>
                            <img className='w-48 cursor-zoom-in' src={webDevelopmentCertificateImg} alt="Certificate Image" />
                        </PhotoView>
                    </PhotoProvider>
                </div>

            </div>

            <div className='flex flex-col md:flex-row justify-between py-4 px-10 gap-2 text-center md:text-left bg-gray-50 mt-5 text-[#080808]'>
                <h2> <FaRegCopyright className='inline' /> 2024. All rights reserved by Shahriar Hossain Alvi</h2>

                <h4 className='font-medium'>Developed by <span className='font-bold'>Shahriar Hossain Alvi</span></h4>
            </div>
        </footer>
    );
};

export default Footer;