import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About_us from "./pages/about_us";
import Subscribe from "./pages/Subscribe";

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
        path: "/about",
        element: <About_us />,
      },
      {
        path: "Subscribe",
        element: <Subscribe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;