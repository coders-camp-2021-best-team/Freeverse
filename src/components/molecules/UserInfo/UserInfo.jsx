import PropTypes from 'prop-types';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import { Text } from '../../atoms/Text/Text';
import './UserInfo.scss';

export const UserInfo = ({ children, src }) => {
    return (
        <div>
            <ImageComponent src={src} size='large' />
            <Text type='primary' size='large'>
                {children}
            </Text>
        </div>
    );
};

UserInfo.propTypes = {
    children: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};
