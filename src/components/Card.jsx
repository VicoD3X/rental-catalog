import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    return (
        <div className='locatCard'>
            <Link to={`/detail/${id}`}>
                <div className='image-containerHome'>
                    <img src={cover} alt={title} className='testimg' />
                    <div className='GradientOpacity'></div>
                </div>
                <p className='locatName'>{title}</p>
            </Link>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;
