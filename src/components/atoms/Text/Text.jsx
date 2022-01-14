import PropTypes from 'prop-types';

import './Text.scss';

export const Text = ({ children, variant }) => {
    return <p className={`atom__text atom__text__${variant}`}>{children}</p>;
};

Text.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary'])
};

Text.defaultProps = {
    variant: 'primary'
};
