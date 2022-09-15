import api from './base';

export function createUser(data) {
    return api.post('/users', data);
}
