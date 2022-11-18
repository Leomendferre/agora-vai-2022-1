import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-leonardo.onrender.com/',
    timeout: 5000,
    headers: {
        'x-access-token': window.sessionStorage.getItem('app-data')
    } 
})

export default api