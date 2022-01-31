import { ReactComponent as Logo } from '../../Images/logo.svg';
import { Button, NavBar } from '../../components';
import './Home.scss';

// TODO we actually need to connect this button with google log in

export const HomePage = () => {
    return (
        <div className='home__page'>
            <Logo className='home__page__logo' />
            <Button text='LOG IN WITH GOOGLE' />
            <NavBar />
        </div>
    );
};
