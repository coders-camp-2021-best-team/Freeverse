import PropTypes from 'prop-types';

import './Text.scss';

export const Text = ({ children, type, size }) => {
    return <span className={`atom__text atom__text${type}`}>{children}</span>;
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
