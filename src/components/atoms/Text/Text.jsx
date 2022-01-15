import PropTypes from 'prop-types';

import './Text.scss';

export const Text = ({ children, type, size }) => {
    return <p className={`atom__text`} type={type} size={size}>{children}</p>;
};

Text.propTypes = {
    children: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'accent']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge'])
};

Text.defaultProps = {
    type: 'primary',
    size: 'medium'
};
