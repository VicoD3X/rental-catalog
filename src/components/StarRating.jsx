import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
    const numericRating = Number(rating);

    return (
        <div aria-label={`Note ${numericRating} sur 5`}>
            {[1, 2, 3, 4, 5].map((value) => (
                <FontAwesomeIcon
                    icon={faStar}
                    key={value}
                    className='starsIcon'
                    style={{ color: value <= numericRating ? undefined : 'lightgray' }}
                />
            ))}
        </div>
    );
}

StarRating.propTypes = {
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StarRating;
