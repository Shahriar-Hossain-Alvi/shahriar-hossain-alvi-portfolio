import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import AllProjects from "../Pages/AllProjects/AllProjects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/allProjects",
                element: <AllProjects />,
            },
        ]
    },
]);

export default router;