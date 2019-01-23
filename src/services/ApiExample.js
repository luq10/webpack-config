class ApiExample {
  api = null;

  constructor(api) {
    this.api = api;
  }

  get(/*page*/) {
    // return this.api.http.get('/v1/example', { params: { page: 1 } })
    //   .then(res => res.data)
    //   .catch(() => Promise.reject('GENERAL_ERROR'));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {id: '001', firstName: 'John', lastName: 'Doe'},
          {id: '002', firstName: 'Mark', lastName: 'Smith'},
        ]);
      }, 1000);
    });
  }

  remove(/*id*/) {
    // return this.api.http.delete(...);
    //   .then(...)
    //   .catch(...);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}

export default ApiExample;
