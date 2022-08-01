import axios from 'axios';

export const getTopics = (token) => {
    return axios.get('/game/topics', {
        headers: {
            authorization: token
        }
    });
}