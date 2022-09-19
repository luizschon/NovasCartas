import api from './base'

export function getNews(userId = null) {
    if (userId)
        return api.get('/news?user_id=' + userId);
    else 
        return api.get('/news');
}

