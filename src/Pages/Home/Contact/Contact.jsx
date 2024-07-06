import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    return (
        <div id='contact' className='bg-[#eeeeee8c] text-[#080808] py-12'>
            <SectionTitle title={'Contact with Me'}></SectionTitle>

            <Fade>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                    <div className='flex items-center gap-1'>
                        <div className='border w-7 h-7 flex items-center justify-center rounded-full bg-white'>
                            <FaPhoneAlt className='text-[#444444]' />
                        </div>
                        <h2 className='md:text-xl font-semibold font-open-sans'> +8801630989742</h2>
                    </div>

                    <div className=' flex items-center gap-1'>
                        <div className='border rounded-full bg-white w-7 h-7 flex items-center justify-center'>
                            <MdEmail className='text-[#444444]' />
                        </div>
                        <h2 className='md:text-xl font-semibold font-open-sans'> shahriarhossainalvi@gmail.com</h2>
                    </div>

                    <div className='flex items-center gap-1'>
                        <div className='border rounded-full bg-white w-7 h-7 flex items-center justify-center'>
                            <FaLocationDot className='text-[#444444]' />
                        </div>
                        <h2 className='md:text-xl font-semibold font-open-sans'>Dhaka</h2>
                    </div>
                </div>


                <div className='mt-8'>
                    <h2 className='text-center text-2xl font-medium'>Social media links</h2>
                    <div className="flex justify-center gap-5 mt-2">
                        <Link
                            target="_blank"
                            to="https://www.facebook.com/profile.php?id=100011356335262">

                            <button className="btn btn-circle  bg-white hover:bg-[#0866ff] hover:text-white border-[#5e5e5e]"><FaFacebookF /></button>
                        </Link>
                        <Link
                            target="_blank"
                            to="https://github.com/Shahriar-Hossain-Alvi">

                            <button className="btn btn-circle bg-white hover:bg-[#010409] hover:text-white border-[#5e5e5e]"><FaGithub /></button>
                        </Link>
                        <Link
                            target="_blank"
                            to="www.linkedin.com/in/md-shahriar-hossain-alvi">
                            <button className="btn btn-circle bg-white hover:bg-[#0A66C2] hover:text-white border-[#5e5e5e]"><FaLinkedinIn /></button>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;