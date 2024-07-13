
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Shop from "../pages/Shop/Shop";
import Category from "../pages/Category/Category";

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
                path: '/productDetails/:id',
                element: <ProductDetails />,
            },
            {
                path: '/product',
                element: <Product />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/category',
                element: <Category />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
        ]
    }
]);

export default router;
