import axios from 'axios';

export const getRandomFortune = async () => {
    let data;
    try {
        const response = await axios.get('/fortune/wisdom');
        data = response.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error');
    }
    return data;
};
