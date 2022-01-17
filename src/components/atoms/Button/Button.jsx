import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ type, text, variant, onClick }) => {
    return (
        <button
            type={type}
            className={`atom__button atom__button__${variant}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.oneOf('submit', 'button', 'reset'),
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['submit', 'primary', 'secondary', 'cancel']),
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
    onClick: () => null
};
