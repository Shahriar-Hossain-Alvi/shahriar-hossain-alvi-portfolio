/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import aboutImage from "../../../assets/images/aboutImage.png"
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <Element id="about" className="mb-24 mx-2">
            <SectionTitle title={'About Me'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="flex justify-center md:justify-end w-full">
                    <img className="rounded-b-[250px] md:rounded-bl-[250px] max-h-[500px] pb-1 pl-1 border-b-2 border-[#555555]" src={aboutImage} alt="about image" />
                </div>

                <div className="w-full">
                    <p className="font-open-sans text-sm text-[#828282] mb-3">Hello! Passionate and committed, Front-End Web Developer with experience in web application development. Building fast and easy-to-use web experiences with the latest in web technologies and frameworks.</p>

                    <p className="font-open-sans text-sm text-[#828282] mb-14">Responsive, Accessible Web interfaces that look great on any device with HTML, and CSS. I build front-end apps that bring users and businesses together, with advanced leveraging of JavaScript and React. I am also very well versed with back-end technologies like Node., Express, MongoDB With a strong understanding of full-stack, I am capable to create maintainable server side logic that can connect client side and server side aspects of programs efficiently.</p>

                    <table className="font-open-sans text-[#111111]">
                        <tbody>
                            <tr>
                                <td className="font-semibold">Name</td>
                                <td className="font-semibold">:</td>
                                <td className="font-semibold">Md. Shahriar Hossain Alvi</td>
                            </tr>
                            <tr className="h-3"></tr>
                            <tr>
                                <td className="font-semibold">Date of Birth</td>
                                <td className="font-semibold">:</td>
                                <td className="font-semibold">29-12-2002</td>
                            </tr>
                            <tr className="h-3"></tr>
                            <tr>
                                <td className="font-semibold">From</td>
                                <td className="font-semibold">:</td>
                                <td className="font-semibold">Dhaka</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to="https://drive.google.com/file/d/1315GCZBzW-nvderWfWD1a3k8W00O56EU/view?usp=sharing">
                        <button className="btn bg-[#444444] text-white rounded-none mt-4 hover:bg-transparent hover:text-[#444444] hover:border-[#444444]">Download CV</button>
                    </Link>
                </div>
            </div>
        </Element>
    );
};

export default About;