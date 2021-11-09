import axios from 'axios';

const KEY = 'AIzaSyDuap_736-w7Kwx5o23MOQyhoFPilPQ7zQ';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        key: KEY
    }
})