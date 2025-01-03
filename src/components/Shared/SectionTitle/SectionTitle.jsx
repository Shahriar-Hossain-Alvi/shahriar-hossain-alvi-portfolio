import PropTypes from 'prop-types';
import titleDesign from "../../../assets/images/sectionTitleDesign.png"

const SectionTitle = ({ title }) => {
    return (
        <div className='text-center mb-5'>
            <h2 className='text-2xl md:text-[40px] font-semibold text-[#080808] mb-2'>{title}</h2>
            <img className='mx-auto w-24 md:w-36' src={titleDesign} alt="title design" />
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
}

export default SectionTitle;