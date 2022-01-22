import { Link } from 'react-router-dom';
import { Text, Button } from '../../components/index';

import './Error.scss';

export const ErrorPage = () => {
    return (
        <div className='error__page'>
            <Text customClass='error__text__extraLarge'>Oops!</Text>
            <Text customClass='error__text__large'>Page Not Found</Text>
            <Text customClass='error__text__medium'>404</Text>
            <Text customClass='error__text__small'>
                The Page You Are Looking For
                <br />
                Doesn’t Exist Or An Other Error
                Occurred.
                <br />
                Go Back, Or Head Over To Home Page
                <br />
                To Choose A New Direction.
            </Text>
            <Link to='/'><Button text='BACK TO HOME PAGE' /></Link>
        </div>
    );
};
