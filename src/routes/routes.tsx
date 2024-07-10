
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

// Define the routes for the application
const router = createBrowserRouter([
    {
        // Root path renders the App component
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'productDetails',
                element: <ProductDetails />,
            }
        ]
    },
    {
        // Root path renders the App component
        path: '/product',
        element: <Product />,
        children: [
            {
                index: true,
                element: <Product />,
            }
        ]
    },
]);

export default router;
