import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://agoravai-leonardo.onrender.com/',
    credentials: 'include',
    timeout: 10000
})

export default api