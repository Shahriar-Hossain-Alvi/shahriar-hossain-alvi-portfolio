import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ singleProject }) => {
    const { codeLink, liveLink, projectDetails, home_page_image, projectName } = singleProject;

    return (
        <div className='shadow-xl rounded-xl bg-[#ff7f7f7] pb-5'>
            <div className="h-72 w-full overflow-hidden mx-auto rounded-t-xl shadow-xl mb-5">
                <img className="w-full h-full object-cover object-top transition-all ease-in-out duration-[3s] hover:object-bottom rounded-t-xl" src={home_page_image} alt="" />
            </div>

            <div className='py-3 px-3'>
                <h2 className='text-2xl font-bold'>{projectName}</h2>
                <p className='font-medium my-2 font-open-sans'>{projectDetails.description}</p>

                <div>
                    <h4 className='text-lg font-semibold underline mb-2'>Technologies Used:</h4>
                    <ul className='list-disc list-inside grid grid-cols-2'>
                        {
                            projectDetails.technologiesUsed.map((tech, index) => <li key={index}>{tech}</li>)
                        }
                    </ul>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-3 px-2'>
                <div className='flex flex-col gap-2'>
                    <h2>Live Link</h2>
                    <Link target='_blank' to={liveLink[0]} className="px-5 py-2 rounded-xl bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444] text-center">
                        Live 1
                    </Link>

                    <Link target='_blank' to={liveLink[0]} className="rounded-xl px-5 py-2 bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444] text-center">
                        Live 2
                    </Link>
                </div>


                <div className='flex flex-col gap-2'>
                    <h2>Github Code Link</h2>
                    <Link target='_blank' to={codeLink.client_side_code} className="px-5 py-2 rounded-xl bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444] text-center">
                        Frontend
                    </Link>

                    <Link target='_blank' to={codeLink.server_side_code} className="px-5 py-2 w-full rounded-xl bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444] text-center">
                        Backend
                    </Link>
                </div>
            </div>
        </div>
    );
};

PortfolioCard.propTypes = {
    singleProject: PropTypes.object,
}

export default PortfolioCard;