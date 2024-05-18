import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Series,
  Error
} from "./pages";
import { Flowbite } from 'flowbite-react';

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

  const customTheme = {
    accordion: {
      base: "divide-none border-none", // Ensure no border or divide classes
      content: {
        base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
      },
      flush: {
        off: "rounded-lg border-none", // Ensure no border class
        on: "border-none" // Ensure no border class
      },
      title: {
        arrow: {
          base: "h-6 w-6 shrink-0",
          open: {
            off: "",
            on: "rotate-180"
          }
        },
        base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400 border-none", // Ensure no border class
        flush: {
          off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 border-none", // Ensure no border class
          on: "bg-transparent dark:bg-transparent border-none" // Ensure no border class
        },
        heading: "",
        open: {
          off: "",
          on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border-none" // Ensure no border class
        }
      }
    }
  };
  
  
const App = () => {
  return<Flowbite theme={{theme:customTheme}}>
    
    <RouterProvider router={router} />;
     </Flowbite>
  
};
export default App;