import axios from 'axios';
import config from 'appConfig';

class API {
  http = axios.create({
    baseURL: config.APP_URL,
    timeout: 0,
  });

  authenticate(data) {
    this.http.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
  }

  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          accessToken: 123,
          refreshToken: 456,
        });
      }, 1000);
    });
  }

  getUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          firstName: 'FirstName',
          lastName: 'lastName',
        });
      }, 1000);
    });
  }
}

export default new API();
