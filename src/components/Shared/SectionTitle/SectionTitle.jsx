import PropTypes from 'prop-types';
import titleDesign from "../../../assets/images/sectionTitleDesign.png"

const SectionTitle = ({ title }) => {
    return (
        <div className='text-center'>
            <h2 className='text-[40px]'>{title}</h2>
            <img className='mx-auto w-36' src={titleDesign} alt="" />
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.object,
}

export default SectionTitle;