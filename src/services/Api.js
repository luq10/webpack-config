import axios from 'axios';

import ApiExample from './ApiExample';

class Api {
  http = null;

  constructor(httpConfig) {
    this.http = axios.create(httpConfig);

    this.example = new ApiExample(this);
  }
}

export default Api;
