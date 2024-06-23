import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa6';
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMongodb } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';

const Skills = () => {
    return (
        <div className='mb-28 container mx-auto'>
            <SectionTitle title={'My Skills'}></SectionTitle>


            <div className='flex justify-evenly items-center gap-5 flex-wrap'>
                <button className="btn hover:bg-[#fc4f13] lg:btn-lg bg-[#fc4f13] text-white">
                    <FaHtml5 className='text-xl' /> HTML
                </button>

                <button className="btn hover:bg-[#2d53e5] lg:btn-lg bg-[#2d53e5] text-white">
                    <FaCss3Alt className='text-xl' /> CSS
                </button>

                <button className="btn hover:bg-[#f7e025] lg:btn-lg bg-[#f7e025] text-black">
                    <IoLogoJavascript className='text-xl' /> JavaScript
                </button>

                <button className="btn hover:bg-[#080808] lg:btn-lg bg-[#080808] text-[#66dbfb]">
                    <FaReact className='text-xl' /> React
                </button>

                <button className="btn hover:bg-[#082532] lg:btn-lg bg-[#082532] text-[#08ee69]">
                    <SiMongodb className='text-xl' /> MongoDB
                </button>

                <button className="btn hover:bg-[#393939] lg:btn-lg bg-[#393939] text-[#8fc708]">
                    <FaNodeJs className='text-xl' /> NodeJS
                </button>

                <button className="btn hover:bg-[#f7e025] lg:btn-lg bg-[#f7e025] text-black">
                    Express <IoLogoJavascript className='text-xl' />
                </button>

                <button className="btn hover:bg-black lg:btn-lg bg-black text-[#ffcd33]">
                    <RiFirebaseFill className='' /> Firebase
                </button>
            </div>
        </div>
    );
};

export default Skills;