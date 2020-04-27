require('dotenv').config();

export default {
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT ||'https://morning-beyond-84622.herokuapp.com/api/units',
    LOG_IN_ENDPOINT: process.env.REACT_API_LOG_IN_ENDPOINT||'https://morning-beyond-84622.herokuapp.com/api/auth',
    TOKEN_KEY: '',
}