import { RouterProvider } from 'react-router-dom';
import { router } from '../config/Routes/Routes';

export const App = () => {
    return <RouterProvider router={router} />;
};