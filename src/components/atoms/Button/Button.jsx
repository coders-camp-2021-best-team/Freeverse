import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ type, text, variant, onClick, customClass }) => {
    return (
        <button
            type={type}
            className={`atom__button atom__button__${variant} ${customClass}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['submit', 'primary', 'secondary', 'cancel']),
    customClass: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
    customClass: '',
    onClick: () => null
};
