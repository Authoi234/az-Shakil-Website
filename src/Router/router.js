import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import VideoSect from "../Home/Videos/VideoSect";
import BookInfo from "../booking/BookNow/BookInfo";
import BookingLayout from "../layout/BookingLayout";

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
                loader: ({params}) => fetch(`https://az-shakil-website-server.vercel.app/videos/${params.id}`)
            }
        ]
    },
    {
        path: "/book",
        element: <BookingLayout></BookingLayout>,
        children: [
            {
                path: '/book/bookInfo',
                element: <BookInfo></BookInfo>
            },
        ]
    }
])