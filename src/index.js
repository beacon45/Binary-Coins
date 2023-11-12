import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import Trending from './pages/Trending';
import About from './pages/About';
import CryptoDetails from './components/CryptoDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:"/",
        element: <Crypto/>,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails />
          }
        ]
      },
      {
        path:"/trending",
        element: <Trending/>,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails />
          }
        ]
      },
      {
        path:"/About",
        element: <About />,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails/>
          }
        ]
      }
    ]


  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
