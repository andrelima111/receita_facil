import axios from 'axios';

/* 
Rodar json-server --watch -d 180 --host 192.168.1.19 db.json
Dependendo do seu IPV4 vai mudar
*/

const api = axios.create({
    baseURL: 'http://192.168.1.19:3000/'
})

export default api;
