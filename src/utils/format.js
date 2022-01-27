import * as dayjs from 'dayjs';

export const dateFormat = (date, format = 'DD MM YYYY hh:mm') => {
    return dayjs(date).format(format);
};
