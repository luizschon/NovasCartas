import api from './base'

export function getNews() {
    return api.get('/news');
}

