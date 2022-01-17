import PropTypes from 'prop-types';

import './Button.scss';

export const Button = ({ text, variant, onClick }) => {
    return (
        <button
            type='button'
            className={`atom__button atom__button__${variant}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['submit', 'primary', 'secondary', 'cancel']),
    onClick: PropTypes.func
};

Button.defaultProps = {
    variant: 'primary',
    onClick: () => undefined
};
