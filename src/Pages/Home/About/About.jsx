/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import aboutImage from "../../../assets/images/aboutImage.png"
import { Element } from 'react-scroll';
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <Element id="about" className="mb-24 mx-2">
            <SectionTitle title={'About Me'}></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 items-center overflow-x-hidden">
                <Slide triggerOnce={true}>
                    <div className="flex justify-center md:justify-end w-full">
                        <img className="rounded-b-[250px] md:rounded-bl-[250px] max-h-[500px] pb-1 pl-1 border-b-2 border-[#080808]" src={aboutImage} alt="about image" />
                    </div>
                </Slide>

                <Slide triggerOnce={true} direction="right">
                    <div className="w-full">
                        <p className="font-open-sans text-sm text-[#080808] mb-3">Hello! I am a deeply involved and committed Front-End Web Developer with experience in web application development. Develop at ease, fast web experiences using the latest in web technologies and frameworks.</p>

                        <p className="font-open-sans text-sm text-[#080808] mb-14">I can create Responsive, Accessible Web interfaces that look great on any device with HTML, and CSS. I build front-end web apps that bring users and businesses together, with advanced leveraging of JavaScript and React. Besides, I have very sound knowledge regarding back-end technologies like Node, Express, and MongoDB. I can create maintainable server side logic that can connect client side and server side aspects of programs efficiently.</p>

                        <table className="font-open-sans text-[#080808]">
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

                        <Link to="https://drive.google.com/file/d/1GlHZlI8SNE3mifZmmIn_QevlHDCQv1q1/view?usp=sharing" target="_blank">
                            <button className="btn bg-[#080808] text-white rounded-none mt-4 hover:bg-transparent hover:text-[#444444] hover:border-[#080808]">Download Resume</button>
                        </Link>
                    </div>
                </Slide>
            </div>
        </Element>
    );
};

export default About;