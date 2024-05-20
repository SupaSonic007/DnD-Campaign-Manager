"use client";

import { register } from "./register";
import { useFormState } from "react-dom";

export default function Page() {
    const [state, action] = useFormState(register, {
        message: "",
    });
    return (
        <main>
            <h1>Register</h1>

            <div className="infoPanes">
                <span style={{ color: "red", fontWeight: "bold" }}>
                    {state?.message}
                </span>
                <form action={action} style={{ padding: "20px" }}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input id="email" name="email" type="text" required />
                    <br />
                    <br />
                    <label htmlFor="username">Username</label>
                    <br />
                    <input id="username" name="username" type="text" required />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="passwordRepeat">Repeat Password</label>
                    <br />
                    <input
                        id="passwordRepeat"
                        name="passwordRepeat"
                        type="password"
                        required
                    />
                    <br />
                    <br />
                    <input type="submit" value={"Submit"} />
                </form>
            </div>
        </main>
    );
}
