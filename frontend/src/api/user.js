import api from './base';

export function createUser(data) {
    return api.post('/users', data);
}

export function loginUser(data) {
    return api.post('/users/login', data);
}