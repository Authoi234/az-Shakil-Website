import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import VideoSect from "../Home/Videos/VideoSect";
import BookInfo from "../booking/BookNow/BookInfo";

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
                loader: ({params}) => fetch(`http://localhost:5000/videos/${params.id}`)
            }
        ]
    },
    {
        path: "/bookInfo",
        element: <BookInfo></BookInfo>
    }
])