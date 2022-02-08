import PropTypes from 'prop-types';

import './Spinner.scss';

export const Spinner = ({ isOn }) => {
    return (
        <div className='loader' style={{ display: isOn ? 'block' : 'none' }} />
    );
};

Spinner.propTypes = {
    isOn: PropTypes.bool.isRequired
};
