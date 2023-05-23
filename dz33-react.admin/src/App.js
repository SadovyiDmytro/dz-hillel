import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Error from './pages/Error';
import './App.css';

const routes = createBrowserRouter([{
        path: '/',
    element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
}]);

function App() {
    return (
        <RouterProvider router={routes} />
    );
}

export default App;