import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import { Router } from './Router';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';
import 'typeface-roboto';

export const App = () => {
    window.onerror = (event) => {
        toast(event.toString(), {
            type: 'error'
        });
    };

    window.onunhandledrejection = (e) => {
        throw new Error(e.reason.message);
    };

    return (
        <QueryClientProvider client={new QueryClient()}>
            <ToastContainer theme='dark' autoClose={5000} />
            <Router />
        </QueryClientProvider>
    );
};
