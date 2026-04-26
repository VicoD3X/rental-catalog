import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png';

function Header() {
    return (
        <div className='headerContainer'>
            <Link to='/accueil'>
                <img src={logo} alt='Kasa' className='logo' />
            </Link>
            <nav className='headerNav' aria-label='Navigation principale'>
                <Link to='/accueil' className='navTitle'>Accueil</Link>
                <Link to='/a-propos' className='navTitle'>À propos</Link>
            </nav>
        </div>
    );
}

export default Header;
