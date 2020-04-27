import config from './config'

const AuthApiService = {
  postLogin({ user_name, password }) {
    console.log('post ran')
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()

      )
  },
}

export default AuthApiService