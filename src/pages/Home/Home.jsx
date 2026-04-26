import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import headerDisplay from '../../pictures/mainH.png';
import { getListings } from '../../services/listings';

function Home() {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getListings()
            .then(setListings)
            .catch(() => setError('Les annonces sont indisponibles pour le moment.'))
            .finally(() => setLoading(false));
    }, []);

    return (
        <main>
            <section className='displayContainer'>
                <img src={headerDisplay} alt='Vue intérieure lumineuse' className='headerDisplay' />
                <div className='heroContent'>
                    <span className='heroEyebrow'>Catalogue immobilier</span>
                    <h1 className='titleDisplay'>Des logements sélectionnés pour voyager plus simplement</h1>
                    <p className='heroSubtitle'>
                        Une interface React claire pour parcourir des annonces, consulter les détails et valider un
                        parcours utilisateur complet depuis des données JSON locales.
                    </p>
                </div>
            </section>

            <section className='catalogIntro'>
                <div>
                    <span className='sectionEyebrow'>Sélection</span>
                    <h2>Explorer les logements</h2>
                </div>
                <p>
                    Chaque carte mène vers une fiche complète avec galerie, équipements, hôte, tags et notation.
                </p>
            </section>

            <section className='locatContainer' aria-label='Catalogue de logements'>
                <div className='locatUndercontainer'>
                    {loading && <p className='statusMessage'>Chargement des annonces...</p>}
                    {error && <p className='statusMessage'>{error}</p>}
                    {!loading && !error && listings.map((item) => (
                        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;
