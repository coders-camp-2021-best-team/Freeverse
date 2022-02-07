import axios from 'axios';

export const getRandomFortune = async () => {
    let data;

    try {
        const response = await axios(
            'https://asli-fun-fact-api.herokuapp.com/'
        );
        data = response.data.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('error');
    }

    return data;
};
