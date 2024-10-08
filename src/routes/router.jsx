import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../loyout/MainLayout";
import Home from "../pages/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/instructors",
          element:<Instructors/>
        },
        {
          path:"/classes",
          element:<Classes/>
        }
      ]
    },
  ]);