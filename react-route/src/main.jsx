import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LandingPage from './components/LandingPage/LandingPage';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
          path: '/',
          element: <LandingPage/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'users',
          element: <Users/>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: 'user-details/:userId',
          element: <UserDetails/>,
          // loader: ({params}) => console.log(params.userDetails) 
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: '*',
          element: <ErrorPage/>
        }
    ],
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
