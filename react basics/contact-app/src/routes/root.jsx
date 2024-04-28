import {Form, Link, Outlet, useLoaderData} from "react-router-dom";
import {createContact, getContacts} from "../data/contacts.js";

export default function Root() {
    /* The useLoaderData() hook provides the value returned from your route loader.*/
    const { contacts } = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>Contact Management System</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>
            {/* Define where the children routes will be rendered*/}
            <div id="detail">
                <Outlet/>
            </div>

        </>
    )
}

/* Loaders are used to provide data to a route element before it is rendered */
export async function loader() {
    const contacts = await  getContacts();
    return {contacts}
}

/* This will trigger an action to create a contact*/
export async function action() {
    const contact = await createContact();
    return { contact };
}
