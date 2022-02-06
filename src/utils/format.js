import * as dayjs from 'dayjs';

export const dateFormat = (date, format = 'DD.MM.YYYY hh:mm A') => {
    return dayjs(date).format(format);
};
