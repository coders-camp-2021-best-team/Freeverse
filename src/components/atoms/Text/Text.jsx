import PropTypes from 'prop-types';

import './Text.scss';

export const Text = ({ children, type, size }) => {
    return (
        <span className={`atom__text atom__text${type} atom__text${size}`}>
            {children}
        </span>
    );
};

Text.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['primary', 'secondary', 'accent']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge'])
};

Text.defaultProps = {
    children: null,
    type: 'primary',
    size: 'medium'
};
