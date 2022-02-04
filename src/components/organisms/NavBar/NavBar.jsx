import { useState, useCallback } from 'react';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { UserInfo } from '../../molecules/UserInfo/UserInfo';
import { Navigation } from '../Navigation/Navigation';
import { ImageComponent } from '../../atoms/ImageComponent/Image';
import COOKIE from '../../../images/cookie.png';

import './NavBar.scss';
// import { Button } from '../..';

const getRandomFortune = async () => {
    let data;
    try {
        const response = await fetch('/fortune/wisdom');
        data = await response.json();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error');
    }
    return data;
};

export const NavBar = () => {
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
        <div className='nav__bar'>
            <Logo className='nav__bar__logo' />
            <div className='nav__bar__section'>
                <UserInfo onClick={handleOnAvatarClick} />
                <Navigation isOpen={isNavigationOpen} />
                <div style={{ position: 'relative' }}>
                    {!!text && (
                        <div
                            style={{
                                position: 'absolute',
                                left: '100%',
                                background: 'red',
                                width: '10vw',
                                maxHight: '100px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}
                        >
                            <button onClick={handleCloseClick}>
                                &times; Clear
                            </button>
                            {text}
                        </div>
                    )}
                    <ImageComponent
                        src={COOKIE}
                        alt=''
                        size='large'
                        onClick={handleOnCookieClick}
                    />
                </div>
            </div>
        </div>
    );
};
