import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text/Text';
import { Icon, icons } from '../../atoms/IconComponent/Icon';
import './InformationRow.scss';

export const InformationRow = ({ onClick, children, iconName }) => {
    return (
        <button onClick={onClick} className='information__row'>
            <Icon size='medium' iconName={iconName} />
            <Text type='primary' size='medium'>
                {children}
            </Text>
        </button>
    );
};

InformationRow.propTypes = {
    children: PropTypes.string.isRequired,
    iconName: PropTypes.oneOf(Object.keys(icons)).isRequired,
    onClick: PropTypes.func
};

InformationRow.defaultProps = {
    onClick: () => null
};
