"use client"
import { addChar } from "@/utils/charHelpers";
import { getCurrentUser } from "@/utils/jwt";
import { useFormState } from "react-dom";

export default function Page () {
    const [state, action] = useFormState(addCharFromForm, undefined);
    return (
        <main>
            <form action={action}>
                <label htmlFor="name">Character name:</label>
                <br/>
                <input id="name" name="name" type="text" placeholder="Name..."></input>
                <br/>
                <br/>
                <label htmlFor="url">URL to character sheet:</label>
                <br/>
                <input id="url" name="url" type="url" placeholder="URL..."></input>
                <br/>
                <br/>
                <input type="submit" value={"Submit"}/>
            </form>
        </main>
    )
}

async function addCharFromForm (prevData: any, data: FormData) {
    const name = data.get("name") as string
    const url = data.get("url") as string
    let currentUser;
    // const currentUser = await getCurrentUser()

    // if (currentUser) await addChar(name, currentUser, url)
    // else {console.error("Must be logged in to use this feature")}
}