import { Outlet } from 'react-router';
import { Header } from '../../components';

export const BaseScreen = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
