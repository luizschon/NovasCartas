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

