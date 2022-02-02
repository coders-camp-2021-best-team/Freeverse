import PropTypes from 'prop-types';
import { Header } from '../../components';

import './BaseScreen.scss';

export const BaseScreen = ({ children }) => {
    return (
        <div className='baseScreen'>
            <Header />
            <main>{children}</main>
        </div>
    );
};

BaseScreen.propTypes = {
    children: PropTypes.node.isRequired
};
