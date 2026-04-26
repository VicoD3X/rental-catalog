import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import headerDisplay from '../../pictures/mainH.png';
import { getListings } from '../../services/listings';

function Home() {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getListings()
            .then(setListings)
            .catch(() => setError('Les annonces sont indisponibles pour le moment.'));
    }, []);

    return (
        <>
            <div className='displayContainer'>
                <img src={headerDisplay} alt='Vue intérieure lumineuse' className='headerDisplay' />
                <p className='titleDisplay'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='locatContainer'>
                <div className='locatUndercontainer'>
                    {error && <p className='statusMessage'>{error}</p>}
                    {!error && listings.map((item) => (
                        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
