import axios from 'axios';

export const getTopics = (token) => {
    return axios.get('/game/topics', {
        headers: {
            authorization: token
        }
    });
}

export const getQuestions = (token, topic, difficulty) => {
    return axios.get(`/game/questions?topic=${topic}&difficulty=${difficulty}`, {
        headers: {
            authorization: token
        }
    });
}