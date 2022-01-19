import PropTypes from 'prop-types';
import { useCallback, memo } from 'react';
import './Image.scss';

// TODO Add loading on image onLoad

export const ImageComponent = memo(({ src, size, onClick }) => {
    const imageOnClick = useCallback(() => onClick(), [onClick]);

    return (
        <img
            src={src}
            className={`atom__image atom__image__${size}`}
            alt=''
            onClick={imageOnClick}
        />
    );
});

ImageComponent.propTypes = {
    size: PropTypes.oneOf(['medium', 'large']),
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

ImageComponent.defaultProps = {
    size: 'medium',
    onClick: () => null
};
