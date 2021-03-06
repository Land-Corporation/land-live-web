export const SERVER_BASE_URL = (() => {
  if (process.env.REACT_APP_MODE === 'local') return 'http://127.0.0.1:8000/api/v1';
  if (process.env.REACT_APP_MODE === 'dev') return 'https://dev-api.landcorp.io/api/v1';
  if (process.env.REACT_APP_MODE === 'prod') return 'https://api.landcorp.io/api/v1';
})();
