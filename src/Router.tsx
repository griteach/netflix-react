import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import Root from "./Root";
import Tv from "./screens/Tv";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Search from "./screens/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
