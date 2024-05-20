"use client";

import { auth } from "./login";
import { useFormState } from "react-dom";

export default function Page() {
    const [state, action] = useFormState(auth, {
        message: "",
    });
    return (
        <main>
            <h1>Login</h1>

            <div className="infoPanes">
                <span style={{ color: "red", fontWeight: "bold" }}>
                    {state?.message}
                </span>
                <form action={action} style={{ padding: "20px" }}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input id="email" name="email" type="email" />
                    <br />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input id="password" name="password" type="password" />
                    <br />
                    <br />
                    <input type="submit" value={"Submit"} />
                    <br />
                    <br />
                    <span>Don&apos;t have an account? <a href='/register'>Register now!</a></span>
                </form>
            </div>
        </main>
    );
}
