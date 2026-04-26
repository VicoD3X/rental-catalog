import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasSeveralPictures = pictures.length > 1;

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className='slider-container picsDetail'>
            {hasSeveralPictures && (
                <button onClick={goToPrev} className='slider-arrow left' type='button' aria-label='Image précédente'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}
            <img src={pictures[currentIndex]} alt={`Vue du logement ${currentIndex + 1}`} />
            {hasSeveralPictures && (
                <>
                    <button onClick={goToNext} className='slider-arrow right' type='button' aria-label='Image suivante'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <div className='slider-index'>
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}

Slider.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
