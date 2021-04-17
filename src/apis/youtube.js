import axios from 'axios'; 

const KEY = 'AIzaSyDYIcVN1s8go5Pz4xbs5g_42ytfNjGAECk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: '5', 
    key: `${KEY}`, 
  }
});