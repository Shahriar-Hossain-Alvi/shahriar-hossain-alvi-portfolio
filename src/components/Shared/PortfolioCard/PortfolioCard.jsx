import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ singleProject }) => {
    const { codeLink, liveLink, projectDetails, home_page_image, projectName } = singleProject;

    return (
        <div>
            <div className="h-48 w-full overflow-hidden mx-auto">
                <img className="w-full h-full object-cover object-top transition-all ease-in-out duration-1000 hover:object-bottom" src={home_page_image} alt="" />
            </div>

            <div className='py-3 px-1'>
                <h2 className='text-2xl font-bold'>{projectName}</h2>
                <p className='font-medium my-2 font-open-sans'>{projectDetails.description}</p>
                <div>
                    <h4>Technologies Used</h4>
                    <ul className='list-disc list-inside grid grid-cols-2'>
                        {
                            projectDetails.technologiesUsed.map((tech, index) => <li key={index}>{tech}</li>)
                        }
                    </ul>
                </div>
            </div>

            <table className='table text-center'>
                <tbody>
                    <tr>
                        <td>
                            <h2 className='font-semibold'>Live links:</h2>
                        </td>

                        <td>
                            <Link target='_blank' to={liveLink[0]} className="px-5 py-2 rounded-xl bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444]">
                                Live 1
                            </Link>
                        </td>

                        <td>
                            <Link target='_blank' to={liveLink[0]} className="rounded-xl px-5 py-2 bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444]">
                                Live 2
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='table text-center'>
                <tbody>
                    <tr>
                        <td>
                            <h2 className='font-semibold'>Github Links:</h2>
                        </td>

                        <td>
                            <Link target='_blank' to={codeLink.client_side_code} className="px-5 py-2 rounded-xl bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444]">
                                Frontend
                            </Link>
                        </td>

                        <td>
                            <Link target='_blank' to={codeLink.server_side_code} className="px-5 py-2 w-full rounded-xl bg-[#444444] text-white hover:bg-transparent hover:text-[#444444] border border-[#444444]">
                                Backend
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

PortfolioCard.propTypes = {
    singleProject: PropTypes.object,
}

export default PortfolioCard;