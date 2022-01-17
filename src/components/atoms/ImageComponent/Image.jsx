import PropTypes from 'prop-types';
import './Image.scss';

// TODO Add loading on image onLoad


const imageOnClick = useCallback(() => onClick(), [onClick]);

export const ImageComponent = memo(({ src, size, onClick }) => {
    return (

        <img src={`${src}`} clasName={`atom__image atom_image_${size}`} onClick={imageOnClick}></img>

    );
});

ImageComponent.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    source: img.propTypes.source.isRequired,
    onClick: PropTypes.func
};
