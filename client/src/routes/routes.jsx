import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddUpload from "../pages/AddUpload";

import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "upload",
                element: <AddUpload />,
            },
        ],
    },
]);

export default router;
