import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/IconComponent/Icon';
import './InformationRow.scss';

export const InformationRow = ({ onClick, children, src }) => {
    return (
        <button onClick={onClick} className='information__row'>
            <Icon size='medium' iconName={src} />
            <Text type='primary' size='medium'>
                {children}
            </Text>
        </button>
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
