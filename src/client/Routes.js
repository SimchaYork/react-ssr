import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// eslint-disable-next-line react/display-name
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
    ],
  },
];
