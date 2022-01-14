import { useState } from 'react';
import PropTypes from 'prop-types';

import { Text, Button } from '../../';

export const Counter = ({ initValue, minValue, maxValue }) => {
    const [count, setCount] = useState(initValue);

    const decrease = () => setCount((x) => (x > minValue ? x - 1 : x));
    const increase = () => setCount((x) => (x < maxValue ? x + 1 : x));

    return (
        <div className='organism__counter'>
            <Text variant='secondary'>Counter: {count}</Text>
            <Button text='Decrease!' onClick={decrease} />
            <Button text='Increase!' onClick={increase} />
        </div>
    );
};

Counter.propTypes = {
    initValue: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number
};

Counter.defaultProps = {
    initValue: 0,
    minValue: 0,
    maxValue: 20
};
