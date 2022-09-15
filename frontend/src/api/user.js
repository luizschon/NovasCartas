import api from './base';

export function createUser(data) {
    return api.post('/api/users', data);
}
