import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import BookInfo from "../booking/BookNow/BookInfo";
import BookingLayout from "../layout/BookingLayout";
import ContactUs from "../Home/ContactUs/ContactUs";
import AdminLayout from "../layout/AdminLayout";
import AdminRoute from "../route/AdminRoute";
import Login from "../Admin/Login";
import PrivateRoute from "../route/PrivateRoute";
import Dahsboard from "../Admin/Dahsboard";
import Assessment from "../Home/Assesments/Assessment";
import Appointments from "../Admin/Appointments";
import PartnerRequestForm from "../Partner/PartnerRequestForm";
import AppointmentsHistory from "../Admin/AppointmentsHistory";

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
                path: "contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "assessment",
                element: <Assessment></Assessment>
            },
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
                path: '/admin',
                element: <AdminRoute><Dahsboard></Dahsboard></AdminRoute>
            },
            {
                path: '/admin/dashboard',
                element: <AdminRoute><Dahsboard></Dahsboard></AdminRoute>
            },
            {
                path: '/admin/appointments',
                element: <AdminRoute><Appointments></Appointments></AdminRoute>
            },
            {
                path: '/admin/appointments-history',
                element: <AdminRoute><AppointmentsHistory></AppointmentsHistory></AdminRoute>
            },
        ]
    },
    {
        path: "/partnership",
        element: <PrivateRoute><Outlet></Outlet></PrivateRoute>,
        children: [
            {
                path: '/partnership/request',
                element: <PartnerRequestForm></PartnerRequestForm>
            }
        ]
    },
])