import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='headerContainer'>
            <Link to='/accueil' className='brandLink' aria-label='Retour à l’accueil'>
                <span className='brandMark'>RC</span>
                <span className='brandText'>Rental Catalog</span>
            </Link>
            <nav className='headerNav' aria-label='Navigation principale'>
                <Link to='/accueil' className='navTitle'>Accueil</Link>
                <Link to='/a-propos' className='navTitle'>À propos</Link>
            </nav>
        </header>
    );
}

export default Header;
