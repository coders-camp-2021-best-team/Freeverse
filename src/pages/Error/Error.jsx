import { useNavigate } from 'react-router-dom';
import { Text, Button } from '../../components/index';
import { routes } from '../../routes/Routes';

import './Error.scss';

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='error__page'>
            <Text customClass='error__text__extraLarge'>Oops!</Text>
            <Text customClass='error__text__large'>Page Not Found</Text>
            <Text customClass='error__text__medium'>404</Text>
            <Text customClass='error__text__small'>
                The Page You Are Looking For Doesn&apos;t Exist Or An Other
                Error Occurred. Go Back, Or Head Over To Home Page To Choose A
                New Direction.
            </Text>
            <Button
                text='BACK TO HOME PAGE'
                onClick={() => navigate(routes.Home)}
            />
        </div>
    );
};
