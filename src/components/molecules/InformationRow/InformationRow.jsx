import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/IconComponent/Icon';
import './InformationRow.scss';

export const InformationRow = ({ onClick, children, src }) => {
    const rowClick = useCallback(() => onClick(), [onClick]);

    return (
        <div src={src} className='InformationRow'>
            <Icon onClick={rowClick} />
            <Text onClick={rowClick}>{children}</Text>
        </div>
    );
};

InformationRow.propTypes = {
    children: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

InformationRow.defaultProps = {
    onClick: () => null
};
