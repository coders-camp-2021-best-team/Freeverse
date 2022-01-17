import PropTypes from 'prop-types';

import './Image.scss';


export const ImageComponent = ({ src, size, onClick }) => {
    return (

        <img src={`${src}`} clasName={`atom__image atom_image_${size}`} onClick={() => imageClick()}></img>

    );
};

ImageComponent.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    onClick: PropTypes.func
};

ImageComponent.defaultProps = {
    size: 'medium',
    onClick: () => undefined
};
