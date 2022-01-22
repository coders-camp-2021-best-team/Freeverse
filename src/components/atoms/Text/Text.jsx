import PropTypes from 'prop-types';
import './Text.scss';

export const Text = ({ children, type, size }) => {
    return (
        <span className={`atom__text atom__text__${type} atom__text__${size}`}>
            {children}
        </span>
    );
};

Text.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'accent']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge'])
};

Text.defaultProps = {
    type: 'primary',
    size: 'medium'
};
