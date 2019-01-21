import LoadablePage from '../components/Loadable/LoadablePage';

const AsyncAbout = LoadablePage({
  loader: () => import(/* webpackChunkName: "page.about" */ './About')
});

export default AsyncAbout;
