import { FaRegCopyright } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Lottie from 'react-lottie';
import codingAnimation from "../../../assets/Animation/codingAnimation.json";
import Swal from 'sweetalert2';

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
                    <h6 className="footer-title">Send Me email</h6>
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d467381.75198048924!2d90.38908044212256!3d23.76805602938266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1720014027530!5m2!1sen!2sbd" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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