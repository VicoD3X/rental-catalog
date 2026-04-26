import footerImage from '../pictures/footer.png';

function Footer() {
    return (
        <footer>
            <img src={footerImage} alt='Kasa' className='footerImg' />
            <p className='footerTitle'>© Kasa. Tous droits réservés</p>
        </footer>
    );
}

export default Footer;
