import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import AboutUs from "./pages/about-us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "create-plan",
        element: <Subscribe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;