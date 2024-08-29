import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ singleProject }) => {
    const { codeLink, liveLink, projectDetails, home_page_image, projectName } = singleProject;

    const [isSliced, setIsSliced] = useState(true);

    const handleSeeMore = () => {
        setIsSliced(false)
    }
    const handleSeeLess = () => {
        setIsSliced(true)
    }

    return (
        <div className='shadow-xl rounded-xl pb-5 flex flex-col h-full'>
            <div className="h-72 w-full overflow-hidden mx-auto rounded-t-xl shadow-xl mb-5">
                <img className="w-full h-full object-cover object-top transition-all ease-in-out duration-[3s] hover:object-bottom rounded-t-xl" src={home_page_image} alt="" />
            </div>

            <div className='py-3 px-3'>
                <h2 className='text-2xl font-black text-[#080808]'>{projectName}</h2>
                <div className='font-medium my-2 font-open-sans text-[#5e5e5e]'>
                    {
                        projectDetails.description.length <= 350
                            ?
                            <p>{projectDetails.description}</p>
                            :
                            (
                                <p>
                                    {
                                        isSliced
                                            ?
                                            (
                                                <>
                                                    {projectDetails.description.slice(0, 350)}
                                                    <button onClick={handleSeeMore} className="btn btn-sm btn-link text-black hover:text-blue-700 p-0">...see more</button>
                                                </>
                                            )
                                            :
                                            <p>
                                                {projectDetails.description}
                                                <button onClick={handleSeeLess} className="btn btn-sm text-white block btn-error">see less</button>
                                            </p>
                                    }
                                </p>
                            )
                    }
                </div>
            </div>

            {/* technologies used */}
            <div className='py-3 px-3'>
                <h4 className='text-xl font-semibold underline mb-2 text-[#080808]'>Technologies Used:</h4>
                <ul className='list-disc list-inside grid grid-cols-2 font-medium text-[#080808]'>
                    {
                        projectDetails.technologiesUsed.map((tech, index) => <li key={index}>{tech}</li>)
                    }
                </ul>
            </div>


            <div className='grid grid-cols-2 gap-3 px-2 pt-3'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-semibold text-[#080808]'>Live Link</h2>
                    {
                        liveLink.length === 2 &&
                        <>
                            <Link target='_blank' to={liveLink[0]} className="px-5 py-2 rounded-xl bg-[#080808] text-white hover:bg-transparent hover:text-[#444444] border border-[#080808] text-center font-semibold">
                                Live 1
                            </Link>

                            <Link target='_blank' to={liveLink[1]} className="rounded-xl px-5 py-2 bg-[#080808] text-white hover:bg-transparent hover:text-[#444444] border border-[#080808] text-center font-semibold">
                                Live 2
                            </Link>
                        </>
                    }
                    {
                        liveLink.length === 1 &&
                        <>
                            <Link target='_blank' to={liveLink[0]} className="px-5 py-2 rounded-xl bg-[#080808] text-white hover:bg-transparent hover:text-[#444444] border border-[#080808] text-center font-semibold">
                                Live
                            </Link>
                        </>
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg font-semibold text-[#080808]'>Github Code Link</h2>

                    <Link target='_blank' to={codeLink.client_side_code} className="px-5 py-2 rounded-xl bg-[#080808] text-white hover:bg-transparent hover:text-[#444444] border border-[#080808] text-center font-semibold">
                        Frontend
                    </Link>

                    <Link target='_blank' to={codeLink.server_side_code} className="px-5 py-2 w-full rounded-xl bg-[#080808] text-white hover:bg-transparent hover:text-[#444444] border border-[#080808] text-center font-semibold">
                        Backend
                    </Link>
                </div>
            </div>
        </div >
    );
};

PortfolioCard.propTypes = {
    singleProject: PropTypes.object,
}

export default PortfolioCard;