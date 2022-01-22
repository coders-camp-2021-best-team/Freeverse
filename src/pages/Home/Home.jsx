import { ReactComponent as Logo } from '../../Images/logo.svg';
import { Button } from '../../components/index';
import './Home.scss';

export const HomePage = () => {
    return (
        <div className='home__page'>
            <Logo className='home__page__logo' />
            <Button text='LOG IN WITH GOOGLE' onClick />
        </div>
    );
};
