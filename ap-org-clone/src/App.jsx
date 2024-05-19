import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Series, Error } from "./pages";
import { loader as FAQloader } from "./pages/Series";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    
    children: [
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        index: true,
        element: <Series />,
        loader: FAQloader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
