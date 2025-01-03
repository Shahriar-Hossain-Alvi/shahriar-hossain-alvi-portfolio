import { FaRegCopyright } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Lottie from 'react-lottie';
import codingAnimation from "../../../assets/Animation/codingAnimation.json";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const emailjsServiceID = 'service_7psiz7c'
const emailjsTemplateID = 'template_eahz4jk'
const emailjsPublicKey = '-v-SpzcqkTSoz7ci4'

const Footer = () => {
    //animation settings
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: codingAnimation,
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(emailjsServiceID, emailjsTemplateID, formData, emailjsPublicKey)
            .then((response) => {
                if (response.status === 200) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Email send successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to send email",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };


    return (
        <footer className='pt-10 bg-[#080808] text-white'>
            <div className='footer px-10 flex flex-col
             lg:flex-row justify-between gap-5'>
                <div className='w-full lg:w-3/12'>
                    <h6 className="footer-title">Quick Links</h6>

                    <ScrollLink className="cursor-pointer" to="about" smooth={true} duration={500}>About Me</ScrollLink>

                    <ScrollLink className="cursor-pointer" to="qualification" smooth={true} duration={500}>Qualification</ScrollLink>

                    <ScrollLink className="cursor-pointer" to="portfolio" smooth={true} duration={500}>Projects</ScrollLink>

                    <div>
                        <Lottie
                            options={defaultOptions}
                            height={300}
                            width="100">
                        </Lottie>
                    </div>
                </div>

                <div className='w-full lg:w-5/12'>
                    <h6 className="footer-title">Send Me 
                        {/* email */}

                    <Link className='ml-1' to="https://drive.google.com/drive/folders/1e0KwFhZzZnRsuliR6gGWN9Is61wmGs5O?usp=sharing" target="_blank">
                     email
                    </Link>
                    </h6>
                    
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-white'>Name:</span>
                            </label>
                            <input
                                className='input text-black'
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-white'>Email:</span>
                            </label>
                            <input
                                className='input text-black'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-white'>Message:</span></label>
                            <textarea
                                className='textarea text-black'
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className='btn mt-2 btn-success text-white' type="submit">Send Email</button>
                    </form>
                </div>

                <div className='w-full lg:w-4/12'>
                    <h6 className="footer-title">Location</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.4993019684!2d90.25487284317997!3d23.781067239145404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1720261578242!5m2!1sen!2sbd" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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