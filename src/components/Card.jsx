import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    return (
        <article className='locatCard'>
            <Link to={`/detail/${id}`} aria-label={`Voir le logement ${title}`}>
                <div className='image-containerHome'>
                    <img src={cover} alt={title} className='testimg' loading='lazy' />
                    <div className='GradientOpacity'></div>
                </div>
                <div className='cardMeta'>
                    <span className='cardLabel'>Logement</span>
                    <h3 className='locatName'>{title}</h3>
                </div>
            </Link>
        </article>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;
