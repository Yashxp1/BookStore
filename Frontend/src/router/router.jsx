import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/orders',
        element: <div>Orders</div>,
      },
      {
        path: '/about',
        element: <div>about</div>,
      },
    ],
  },
]);

export default router;
