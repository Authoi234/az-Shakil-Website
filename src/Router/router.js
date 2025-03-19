import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import VideoSect from "../Home/Videos/VideoSect";
import BookInfo from "../booking/BookNow/BookInfo";
import BookingLayout from "../layout/BookingLayout";
import ContactUs from "../Home/ContactUs/ContactUs";
import AdminLayout from "../layout/AdminLayout";
import AdminRoute from "../route/AdminRoute";
import Login from "../Admin/Login";
import PrivateRoute from "../route/PrivateRoute";
import Dahsboard from "../Admin/Dahsboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/video/:id",
                element: <VideoSect></VideoSect>,
                loader: ({ params }) => fetch(`https://az-shakil-website-server-kwe1eyc20-authoi234s-projects.vercel.app/videos/${params.id}`)
            },
            {
                path: "contact-us",
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: "/book",
        element: <BookingLayout></BookingLayout>,
        children: [
            {
                path: '/book/booking',
                element: <BookInfo></BookInfo>
            },
        ]
    },
    {
        path: "/admin/auth",
        element: <><Outlet></Outlet></>,
        children: [
            {
                path: '/admin/auth/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: "/admin",
        element: <PrivateRoute><AdminLayout></AdminLayout></PrivateRoute>,
        children: [
            {
                path: '/admin/dashboard',
                element: <AdminRoute><Dahsboard></Dahsboard></AdminRoute>
            },
        ]
    },
])