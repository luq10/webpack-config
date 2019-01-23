import config from 'appConfig';

import Api from './Api';

export default new Api({
  baseURL: config.APP_URL,
  timeout: 0,
});
