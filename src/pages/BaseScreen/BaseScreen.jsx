import PropTypes from 'prop-types';
import { Header } from '../../components';

export const BaseScreen = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

BaseScreen.propTypes = {
    children: PropTypes.node.isRequired
};
