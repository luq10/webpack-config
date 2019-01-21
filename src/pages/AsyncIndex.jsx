import LoadablePage from '../components/Loadable/LoadablePage';

const AsyncIndex = LoadablePage({
  loader: () => import(/* webpackChunkName: "page.index" */ './Index')
});

export default AsyncIndex;
