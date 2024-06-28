import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../../assets/images/logo.png"
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from "react";

const Navbar = () => {
    const toggleNavbarColor = () => {
        if (window.scrollY > 450) {
            document.getElementById('navbar').classList.add('bg-gray-50')
        }
        else {
            document.getElementById('navbar').classList.remove('bg-gray-50')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleNavbarColor);
        return () => {
            window.removeEventListener('scroll', toggleNavbarColor);
        }
    }, [])


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>

        <li><ScrollLink className="cursor-pointer" to="about" smooth={true} duration={500}>About Me</ScrollLink></li>

        <li><ScrollLink className="cursor-pointer" to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink></li>

        <li><ScrollLink className="cursor-pointer" to="qualification" smooth={true} duration={500}>Qualifications</ScrollLink></li>

        <li><ScrollLink className="cursor-pointer" to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
    </>

    return (
        <div id="navbar" className="navbar fixed z-50">
            <div className="navbar-start">
                <Link to='/'>
                    <button className="btn bg-transparent h-16 border-none hover:bg-transparent shadow-none">
                        <img className="h-16" src={logo} alt="" />
                    </button>
                </Link>
            </div>

            <div id="navbarLinks" className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="text-left flex px-1 justify-between gap-5 font-medium">
                        {navLinks}
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-[#fcfcfc] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl  rounded-box w-52 bg-[#fcfcfc]">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;