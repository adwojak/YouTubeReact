import axios from 'axios';

const KEY = 'AIzaSyAwf-gYs-haUW6WmQirBwvJ4NHfSE-HE-g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
});