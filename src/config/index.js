const URL_API = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://api-fake-json-server.herokuapp.com';

export default {
  URL_API,
};
