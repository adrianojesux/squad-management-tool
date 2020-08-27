import axios from 'axios'

const proxy = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2/players',
  timeout: 3000,
  timeoutErrorMessage: 'Maximum request time expired. Try again later.',
})

proxy.interceptors.request.use(request => {
  request.headers = {
    ...request.headers,
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  }
  return request
})

export default proxy
