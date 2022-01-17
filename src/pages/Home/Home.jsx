import { Link } from 'react-router-dom';
import { HelloWorld, Counter } from '../../components';

export const HomePage = () => {
    return (
        <div className='page__home'>
            <HelloWorld />
            <Counter initValue={10} />
            <Link to='/site'>Main site</Link>
        </div>
    );
};
