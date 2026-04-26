import Dropdown from '../../components/Dropdown';
import aboutDisplay from '../../pictures/aboutDisplay.png';

const values = [
    {
        title: 'Fiabilité',
        content: 'Les annonces sont présentées depuis un fichier JSON local, avec un parcours simple et stable.',
    },
    {
        title: 'Respect',
        content: 'L’interface met en avant des informations utiles sans complexifier l’expérience utilisateur.',
    },
    {
        title: 'Service',
        content: 'Les composants réutilisables facilitent la navigation entre catalogue, détail et informations.',
    },
    {
        title: 'Sécurité',
        content: 'Les routes invalides et les annonces introuvables sont gérées proprement via une page 404.',
    },
];

function About() {
    return (
        <>
            <div className='displayContainer'>
                <img src={aboutDisplay} alt='Paysage de montagne' className='headerDisplay' />
                <p className='titleDisplay'>À propos</p>
            </div>

            <div className='bodyAbout'>
                <div className='dropdown-containerAbout'>
                    {values.map((value) => (
                        <Dropdown key={value.title} title={value.title} titleClass='dropdown-title'>
                            <div className='dropdown-item'>
                                <span className='dropdescription-title'>{value.content}</span>
                            </div>
                        </Dropdown>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;
