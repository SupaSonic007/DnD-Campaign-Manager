"use client"
import { useFormState } from "react-dom";
import addCharFromForm from "../../../utils/helpers/addChar";

export default function Page () {
    const [state, action] = useFormState(addCharFromForm, undefined);
    return (
        <main>
            <span style={{ color: "red", fontWeight: "bold" }}>{state?.message}</span>
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