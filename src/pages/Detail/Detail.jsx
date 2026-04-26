import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';
import Slider from '../../components/Slider';
import StarRating from '../../components/StarRating';
import { getListingById } from '../../services/listings';
import NotFound from '../404/404';

function DetailPage() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        setError('');

        getListingById(id)
            .then((result) => {
                if (isMounted) {
                    setListing(result);
                }
            })
            .catch(() => {
                if (isMounted) {
                    setError('Impossible de charger cette annonce.');
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [id]);

    if (loading) {
        return <p className='statusMessage'>Chargement de l&apos;annonce...</p>;
    }

    if (error) {
        return <p className='statusMessage'>{error}</p>;
    }

    if (!listing) {
        return <NotFound />;
    }

    return (
        <>
            <div className='headerDetail'>
                {listing.pictures?.length > 0 && <Slider pictures={listing.pictures} />}
                <div className='underDetail'>
                    <div className='containDetail1'>
                        <h1 className='titleDetail'>{listing.title}</h1>
                        <p className='locationDetail'>{listing.location}</p>
                        <div className='tagsContainer'>
                            {listing.tags.map((tag) => (
                                <span key={tag} className='tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='containDetail2'>
                        <div className='profilContainer'>
                            <h2 className='nameDetail'>{listing.host.name}</h2>
                            <img className='profilDetail' src={listing.host.picture} alt={listing.host.name} />
                        </div>
                        <div className='starsDetail'>
                            <StarRating rating={listing.rating} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='dropdown-container'>
                <Dropdown title='Description' titleClass='dropdown-title'>
                    <div className='dropdown-item'>
                        <span className='dropdescription-title'>{listing.description}</span>
                    </div>
                </Dropdown>

                <Dropdown title='Équipements' titleClass='dropdown-title'>
                    {listing.equipments.map((equipment) => (
                        <div key={equipment} className='dropdown-item'>
                            <span className='dropitem-title'>{equipment}</span>
                        </div>
                    ))}
                </Dropdown>
            </div>
        </>
    );
}

export default DetailPage;
