import * as dayjs from 'dayjs';

export function dateFormat(date, format = 'DD MM YYYY hh:mm') {
    return dayjs(date).format(format);
}
