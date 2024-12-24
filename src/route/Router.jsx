import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import FindTutors from "../pages/FindTutors";
import CategoriesTutor from "../pages/CategoriesTutor";
import TutorDetails from "../pages/TutorDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/find-tutors/:category",
        element: <CategoriesTutor />,
      },
      {
        path: "/tutor-details/:id",
        element: (
          <PrivateRoute>
            <TutorDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/find-tutors",
        element: <FindTutors />,
      },
    ],
  },
]);

export default router;
