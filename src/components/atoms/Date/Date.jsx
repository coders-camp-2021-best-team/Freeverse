import PropTypes from 'prop-types';
import * as dayjs from 'dayjs';

const DEFAULT_FORMAT = 'DD MM YYYY hh:mm';

export const Date = ({ format = DEFAULT_FORMAT, children }) => {
    const formatedDate = dayjs(children).format(format);
    // validation before display relay date
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(children) || formatedDate === 'Invalid Date') {
        return <span>-</span>;
    }

    return <time>{formatedDate}</time>;
};

Date.propTypes = {
    children: PropTypes.instanceOf(Date).isRequired,
    format: PropTypes.string.isRequired
};
