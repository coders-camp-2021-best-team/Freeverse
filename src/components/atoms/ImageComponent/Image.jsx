import PropTypes from 'prop-types';
import './Image.scss';

// TODO Add loading on image onLoad

export const ImageComponent = memo(({ src, size, onClick }) => {

    const imageOnClick = useCallback(() => onClick(), [onClick]);

    return (

        <img src={`${src}`} clasName={`atom__image atom_image_${size}`} onClick={imageOnClick}></img>

    );
});

ImageComponent.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    src: img.propTypes.src.isRequired,
    onClick: PropTypes.func
};
