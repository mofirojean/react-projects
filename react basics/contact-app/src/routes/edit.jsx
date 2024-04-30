import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import {updateContact} from "../data/contacts.js";

/*
* You should know normal vanilla javascript sends the data of the form
* to the body of the request as it goes to the server, but react router prevents
* that by sending the formdata as a request to you action
* normally to get the updated field we will use formData.get("name")
* but we made use of  Object.fromEntries to collect them all into an object,
* which is exactly what our updateContact function wants
* */
export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData)
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
    const { contact } = useLoaderData();
    /* useNavigate is router hook that sends you back 1 entry to the browser navigation history */
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First name"
                    type="text"
                    name="first"
                    defaultValue={contact?.first}
                />
                <input
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact?.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact?.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name="notes"
                    defaultValue={contact?.notes}
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button"
                onClick={() => navigate(-1)}>Cancel</button>
            </p>
        </Form>
    );
}
