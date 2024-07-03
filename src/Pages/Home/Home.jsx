import { FaArrowUp } from "react-icons/fa6";
import About from "./About/About";
import Banner from "./Banner/Banner";
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
import Qualification from "./Qualification/Qualification";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";


const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])


    return (
        <div>
            {
                isVisible && <ScrollLink to="banner" smooth={true} duration={500} className="fixed z-50 bottom-12 right-0 bg-[#444444] text-white w-8 h-8 flex justify-center items-center rounded-l-xl cursor-pointer tooltip tooltip-left animate__animated animate__backInRight" data-tip="scroll to top">
                    <FaArrowUp />
                </ScrollLink>
            }

            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Qualification></Qualification>
            <Contact></Contact>
        </div>
    );
};

export default Home;