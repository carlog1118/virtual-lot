require('dotenv').config();

export default {
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT ||'http://localhost:8000/api/units',
    LOG_IN_ENDPOINT: process.env.REACT_API_LOG_IN_ENDPOINT||'http://localhost:8000/api/auth',
    TOKEN_KEY: '',
}