import ReactLoadable from 'react-loadable';

import Loading from './Loading';

const LoadablePage = (opt) => {
  return ReactLoadable({
    loading: Loading,
    delay: 300,
    ...opt
  });
};

export default LoadablePage;
