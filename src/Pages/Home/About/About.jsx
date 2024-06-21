/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import aboutImage from "../../../assets/images/aboutImage.png"
import { Element } from 'react-scroll';

const About = () => {
    return (
        <Element id="about" className="mb-96">
            <SectionTitle title={'About Me'}></SectionTitle>

            <div className="grid grid-cols-2 gap-10 items-center">
                <div className="flex justify-end w-full">
                    <img className="rounded-bl-[250px] max-h-[500px] pb-1 pl-1 border-b-2 border-[#555555]" src={aboutImage} alt="about image" />
                </div>

                <div className="w-full">
                    <p className="font-open-sans text-sm text-[#828282] mb-3">Hello! I'm a passionate and dedicated Front-End Web Developer with a comprehensive skill set in creating dynamic and user-friendly web applications. I specialize in crafting seamless user experiences using modern web technologies and frameworks.</p>

                    <p className="font-open-sans text-sm text-[#828282] mb-14">With a strong foundation in <strong>HTML</strong> and <strong>CSS</strong>, I build responsive and accessible web interfaces that look great on any device. My proficiency in <strong>JavaScript</strong> and frameworks like <strong>React</strong> allows me to create interactive and performant front-end applications that engage users and meet business needs. I also have a solid grasp of back-end technologies, including <strong>Node.js, Express,</strong> and <strong>MongoDB</strong>. This full-stack knowledge enables me to develop and maintain robust server-side logic, ensuring smooth communication between the front-end and back-end of applications.</p>

                    <table className="font-open-sans text-[#111111]">
                        <tr>
                            <td className="font-semibold">Name</td>
                            <td className="font-semibold">:</td>
                            <td className="font-semibold">Md. Shahriar Hossain Alvi</td>
                        </tr>
                        <tr className="h-3"></tr>
                        <tr>
                            <td className="font-semibold">Age</td>
                            <td className="font-semibold">:</td>
                            <td className="font-semibold">24</td>
                        </tr>
                        <tr className="h-3"></tr>
                        <tr>
                            <td className="font-semibold">Email</td>
                            <td className="font-semibold">:</td>
                            <td className="font-semibold">shahriarhossainalvi@gmail.com</td>
                        </tr>
                        <tr className="h-3"></tr>
                        <tr>
                            <td className="font-semibold">Phone</td>
                            <td className="font-semibold">:</td>
                            <td className="font-semibold">+8801630989742</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Element>
    );
};

export default About;