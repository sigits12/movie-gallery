import Dashboard from '../components/Dashboard';
import Detail from '../components/Detail';

export const routes = [
  {
    path: '/',
    exact: true,
    component: <Dashboard />,
    title: 'Dashboard',
    isHeaderElement: true,
  },
  {
    path: '/movies/:id',
    exact: false,
    component: <Detail />,
    title: 'Detail',
    isHeaderElement: false,
  },
];
