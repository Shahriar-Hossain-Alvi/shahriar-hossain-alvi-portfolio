import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/qualification">Qualifications</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="navbar fixed z-50">
            <div className="navbar-start">
                <Link to='/'>
                    <button className="btn bg-transparent h-16 border-none hover:bg-transparent shadow-none">
                        <img className="h-16" src={logo} alt="" />
                    </button>
                </Link>
            </div>

            <div id="navbar" className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="text-left flex px-1 justify-between gap-5 font-medium">
                        {navLinks}
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn bg-[#fcfcfc] lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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