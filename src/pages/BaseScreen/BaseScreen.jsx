import { Outlet } from 'react-router';
import { Header } from '../../components';

import './BaseScreen.scss';

export const BaseScreen = () => {
    return (
        <div className='baseScreen'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
