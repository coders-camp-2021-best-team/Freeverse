import { useState, useCallback } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/Routes';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import { Button } from '../../atoms';
import COOKIE from '../../../images/cookie.png';

import './Header.scss';

const getRandomFortune = async () => {
    let data;
    try {
        const response = await axios.get('/fortune/wisdom');
        data = response.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error');
    }
    return data;
};

export const Header = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const [text, setText] = useState('');

    const handleOnAvatarClick = useCallback(
        () => setIsNavigationOpen((previousState) => !previousState),
        []
    );

    const handleOnCookieClick = useCallback(async () => {
        const data = await getRandomFortune();
        setText(data.fortune);
    }, []);

    const handleCloseClick = useCallback(async () => {
        setText('');
    }, []);

    return (
        <header className='nav__bar'>
            <NavLink to={`${routes.Feed}`}>
                <Logo className='nav__bar__logo' />
            </NavLink>
            <div className='nav__bar__section'>
                <UserInfo onClick={handleOnAvatarClick} />
                <Navigation isOpen={isNavigationOpen} />
                <div className='cookie'>
                    {!!text && (
                        <div className='cookie__popup'>
                            <Button
                                customClass='cookie__popup__button'
                                variant='cancel'
                                text='&times; Close'
                                onClick={handleCloseClick}
                            />
                            {text}
                        </div>
                    )}
                </div>
                <ImageComponent
                    src={COOKIE}
                    alt=''
                    size='large'
                    customClass='nav__bar__section__imgcookie'
                    onClick={handleOnCookieClick}
                />
            </div>
        </header>
    );
};
