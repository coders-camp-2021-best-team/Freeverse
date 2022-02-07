import PropTypes from 'prop-types';
import { useCallback, memo } from 'react';
import './Image.scss';

// TODO Add loading on image onLoad

export const ImageComponent = memo(({ src, size, onClick, customClass }) => {
    const imageOnClick = useCallback(() => onClick(), [onClick]);

    return (
        <img
            src={src}
            className={`atom__image atom__image__${size} ${customClass}`}
            alt=''
            onClick={imageOnClick}
        />
    );
});

ImageComponent.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    src: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    onClick: PropTypes.func
};

ImageComponent.defaultProps = {
    size: 'medium',
    customClass: '',
    onClick: () => null
};
