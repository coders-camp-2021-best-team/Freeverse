import PropTypes from 'prop-types';
import { Text } from '../../atoms/Text/Text';
import { Icon } from '../../atoms/IconComponent/Icon';
import './InformationRow.scss';

export const InformationRow = ({ onClick, children, nameIcon }) => {
    return (
        <div
            onClick={onClick}
            role='complementary'
            className='information__row'
        >
            <Icon size='medium' iconName={nameIcon} />
            <Text type='primary' size='medium'>
                {children}
            </Text>
        </div>
    );
};

InformationRow.propTypes = {
    children: PropTypes.string.isRequired,
    nameIcon: PropTypes.symbol.isRequired,
    onClick: PropTypes.func
};

InformationRow.defaultProps = {
    onClick: () => null
};
