import PropTypes from 'prop-types';
import { Header } from '../../components/organisms/Header/Header';

export const BaseScreen = ({ children, id }) => {
    return (
        <>
            <Header id={id} />
            <main>{children}</main>
        </>
    );
};

BaseScreen.propTypes = {
    children: PropTypes.node,
    id: PropTypes.number // TODO: specify type for ID, this is temporary
};

BaseScreen.defaultProps = {
    children: null,
    id: null // TODO: remove default value for ID
};
