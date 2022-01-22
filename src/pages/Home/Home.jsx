import { Link } from 'react-router-dom';
import { HelloWorld, Counter } from '../../components';
import { routes } from '../../routes/Routes';

export const HomePage = () => {
    return (
        <div className='page__home'>
            <HelloWorld />
            <Counter initValue={10} />
            <Link to={routes.Feed}>Main site</Link>
        </div>
    );
};
