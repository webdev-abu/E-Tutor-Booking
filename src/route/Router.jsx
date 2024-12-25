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
import MyBookTutors from "../pages/MyBookTutors";
import AddTutorials from "../pages/AddTutorials";
import MyTutorials from "../pages/MyTutorials";
import UpdateTutorial from "../pages/UpdateTutorial";

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
        path: "/Add-Tutorials",
        element: <AddTutorials />,
      },
      {
        path: "/my-tutorials",
        element: <MyTutorials />,
      },
      {
        path: "/update-tutorial/:id",
        element: <UpdateTutorial />,
      },
      {
        path: "/booked-tutors",
        element: (
          <PrivateRoute>
            <MyBookTutors />
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
