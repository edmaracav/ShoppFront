import axios from 'axios';

const http = axios.create({
    timeout: 99999
});

export default http;