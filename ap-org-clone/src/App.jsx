import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Series,
  Error
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        index:true,
        element: <Series />,
      },]
  
  }]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;