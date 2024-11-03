import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./shared/ErrorPage";


const Layout = lazy (() => import ('@/Layout'));
const Login = lazy (() => import ('@/pages/Login/Login'));
const Register = lazy (() => import('@/pages/Register/Register'));
const Spinner = lazy (() => import('@/shared/Spinner'));
const Chat =lazy (()=>import('@/pages/Chat/Chat'))


export const router = createBrowserRouter([{

    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/login',
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: '/registro',
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: '/Chat',
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Chat />
          </Suspense>
        ),
      },
      
    ],

}])
