import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {
    loader as rootLoader,
    action as rootAction
} from "./routes/root.jsx";
import ErrorPage from "./components/error-page.jsx";
import Contact, {
    loader as contactLoader
} from "./routes/contact.jsx";
import EditContact from "./routes/edit.jsx";

/* To enable client side routing we need the Browser Router */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        /* We create a loader function to load our contacts and
        * we then import and hook it to our function */
        loader: rootLoader,
        /* Setting the action on the route */
        action: rootAction,
        children: [
            {
                path: '/contacts/:contactId',
                element: <Contact />,
                loader: contactLoader
            },
            {
                path: '/contacts/:contactId/edit',
                element: <EditContact />,
                loader: contactLoader
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
