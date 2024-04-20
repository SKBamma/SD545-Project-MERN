import { Navigate } from "react-router-dom";
import Playlist from "../playlist/playlist";
import LoginPage from "../loginForm/login.pages";



export default [

    {
        path: '/loginpage',
        element: <LoginPage />
    },
    {
        path: '/playlist',
        element: <Playlist />
    },
    // {
    //     path: '/',
    //     element: <Navigate to='/playlist' />
    // }
];
