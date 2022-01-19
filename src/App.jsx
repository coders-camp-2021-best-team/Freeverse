import { Router } from './Router';
import { AuthContextProvider } from './utils';

import './styles/global.scss';
import 'typeface-roboto';

export const App = () => {
    return (
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    );
};
