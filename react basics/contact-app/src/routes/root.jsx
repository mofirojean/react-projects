import {
    Form,
    useNavigation,
    Outlet,
    useLoaderData,
    redirect,
    NavLink, useSubmit
} from "react-router-dom";
import {createContact, getContacts} from "../data/contacts.js";
import {useEffect} from "react";

export default function Root() {
    /* The useLoaderData() hook provides the value returned from your route loader.*/
    const { contacts, q } = useLoaderData();
    /* useNavigation returns the current navigation state ie idle, submitting or loading */
    const navigation = useNavigation();
    /* To make the search form query on change */
    const submit = useSubmit();

    /*adding spinner for better user experience on search*/
    const searching = navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);
    return (
        <>
            <div id="sidebar">
                <h1>Contact Management System</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch
                                });
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
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
            <div id="detail"
                className={navigation.state === "pending" ? "loading" : ""}
            >
                <Outlet/>
            </div>

        </>
    )
}

/* Loaders are used to provide data to a route element before it is rendered */
export async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get('q')
    const contacts = await getContacts(q)
    return { contacts, q }
}

/* This will trigger an action to create a contact*/
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}
