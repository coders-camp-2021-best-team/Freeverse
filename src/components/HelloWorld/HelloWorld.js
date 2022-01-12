import './HelloWorld.scss';

export const HelloWorld = ({ name }) => {
    return (
        <div className='hello'>
            <p className='text'>Hello World!</p>
            <p className='welcome'>Hi, {name}!</p>
        </div>
    );
};
