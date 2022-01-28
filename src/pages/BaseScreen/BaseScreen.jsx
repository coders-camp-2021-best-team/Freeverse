import PropTypes from 'prop-types';
import { Header } from '../../components';
import { AddForm } from '../../components/organisms/AddForm/AddForm';

export const BaseScreen = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <AddForm placeholder='Write something...' type='post' />
        </>
    );
};

BaseScreen.propTypes = {
    children: PropTypes.node.isRequired
};
