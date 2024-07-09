
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

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
            }
        ]
    }
]);

export default router;
