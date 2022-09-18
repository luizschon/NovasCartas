import api from './base'

export function getNews(pageNumber) {
    return api.get('/news?page=' + pageNumber);
}

