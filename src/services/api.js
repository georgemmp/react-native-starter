import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default Api;
