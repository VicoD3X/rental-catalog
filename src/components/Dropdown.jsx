import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ title, titleClass, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonClass = isOpen ? 'dropdown-button open' : 'dropdown-button';

    return (
        <div className='dropdown'>
            <button className={buttonClass} onClick={() => setIsOpen(!isOpen)} type='button'>
                <span className={titleClass}>{title}</span>
                <FontAwesomeIcon className='dropdownIcon' icon={isOpen ? faChevronUp : faChevronDown} />
            </button>
            {isOpen && <div className='dropdown-content'>{children}</div>}
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    titleClass: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Dropdown;
