import PropTypes from 'prop-types';
import { Header } from '../../components';

export const BaseScreen = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

BaseScreen.propTypes = {
    children: PropTypes.node.isRequired
};
