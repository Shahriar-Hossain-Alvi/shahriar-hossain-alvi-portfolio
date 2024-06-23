import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/banner.png"
import userImage from "../../../assets/images/userImage.png"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";


const Banner = () => {
    return (
        <div id="banner" className="relative hero mb-48" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-content text-center pt-28 pb-12">
                <div className="pb-8">
                    <h2 className="font-semibold text-xl lg:text-2xl text-[#111111]">Hi! I am</h2>
                    <h1 className="font-bold text-2xl lg:text-3xl text-[#111111] mb-2">Md Shahriar Hossain Alvi</h1>
                    <p className="font-medium font-open-sans text-sm lg:text-base text-[#444444]">I am a Front End Web Developer</p>
                </div>


                <img className="lg:w-36 lg:h-36 w-32 mb-2 h-32 border-4 rounded-full absolute left-1/2 -translate-x-1/2 -bottom-1/4 lg:-bottom-1/4 border-[#B4B4B4]" src={userImage} alt="" />
            </div>
            <div className="absolute -bottom-28 space-x-5">
                <Link
                    target="_blank"
                    to="https://www.facebook.com/profile.php?id=100011356335262"
                    className="relative bottom-4">
                    <button className="btn btn-circle  bg-transparent hover:bg-[#0866ff] hover:text-white border-[#5e5e5e]"><FaFacebookF /></button>
                </Link>
                <Link
                    target="_blank"
                    to="https://github.com/Shahriar-Hossain-Alvi"
                    className="relative -bottom-2">
                    <button className="btn btn-circle bg-transparent hover:bg-[#010409] hover:text-white border-[#5e5e5e]"><FaGithub /></button>
                </Link>
                <Link
                    target="_blank"
                    to="www.linkedin.com/in/md-shahriar-hossain-alvi"
                    className="relative bottom-4">
                    <button className="btn btn-circle bg-transparent hover:bg-[#0A66C2] hover:text-white border-[#5e5e5e]"><FaLinkedinIn /></button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;