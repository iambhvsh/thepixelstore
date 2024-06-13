import Today from '../pages/Today';
import Games from '../pages/Games';
import Apps from '../pages/Apps';
import Arcade from '../pages/Arcade';
import Search from '../pages/Search';

const routes = [
  {
    path: '/today/',
    component: Today,
  },
  {
    path: '/games/',
    component: Games,
  },
  {
    path: '/apps/',
    component: Apps,
  },
  {
    path: '/arcade/',
    component: Arcade,
  },
  {
    path: '/search/',
    component: Search,
  },
  {
    path: '/app/:packageName',
    asyncComponent: () => import(/* webpackChunkName: "app-details" */ '../pages/AppDetails'),
  },
  // Add the route for Account as a popup
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" */ '../pages/Account'),
    },
  },
  // Add a catch-all route for 404 page
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '../pages/404'),
  },
];

export default routes;
