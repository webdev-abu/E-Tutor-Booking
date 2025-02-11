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
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";
import PrivacyPolicy from "../components/PrivacyPolicy";

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
        path: "/about-us",
        element: <AboutUs />,
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
        element: (
          <PrivateRoute>
            <AddTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoute>
            <MyTutorials />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tutorial/:id",
        element: (
          <PrivateRoute>
            <UpdateTutorial />
          </PrivateRoute>
        ),
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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default router;
