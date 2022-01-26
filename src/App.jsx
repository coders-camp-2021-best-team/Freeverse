import { AuthContextProvider } from './utils';
import { Router } from './Router';

import './styles/global.scss';
import 'typeface-roboto';

export const App = () => {
    return (
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    );
};
