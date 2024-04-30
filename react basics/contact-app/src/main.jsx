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
    loader as contactLoader,
    action as contactAction
} from "./routes/contact.jsx";
import EditContact, {
    action as editAction
} from "./routes/edit.jsx";
import {
    action as destroyAction
} from "./routes/destroy.jsx";
import Index from "./routes/index.jsx";

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
            /* creating an index route which act as a default route */
            { index: true, element: <Index /> },
            {
                path: '/contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
                action: contactAction
            },
            {
                path: '/contacts/:contactId/edit',
                element: <EditContact />,
                action: editAction,
                loader: contactLoader
            },
            {
                path: '/contacts/:contactId/destroy',
                action: destroyAction,
                /* creating a contextual error*/
                errorElement: <div>Oops! There was an error.</div>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
