import api from './base';

export function createUser(data) {
    return api.post('/users', data);
}

export function loginUser(data) {
    return api.post('/users/login', data);
}

export function autoLoginUser(token) {
    return api.post('/users/auto_login', { token: token });
}

export function updateUserPrefs(user_id, news_id, ratingUp) {
    return api.patch('/users/' + user_id + '/prefs', {
        news_id: news_id,
        rating_up: ratingUp
    });
}

