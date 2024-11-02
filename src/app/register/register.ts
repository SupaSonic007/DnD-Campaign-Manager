"use server";

import { addUserTokenToCookie } from "@/utils/jwt";
import { redirect } from "next/navigation";
import {
    checkUserExists,
    addUser,
    getUserByEmail,
} from "../../utils/userHelpers";

export async function register(prevData: any, data: FormData) {
    const email = data.get("email") as string;
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    const [emailTaken, usernameTaken] = await checkUserExists(email, username);

    if (emailTaken || usernameTaken) {
        return {
            message: `${emailTaken ? "Email" : ""}${
                emailTaken && usernameTaken ? " & " : ""
            }${usernameTaken ? "Username" : ""} taken. Make it better.`,
        };
    }

    await addUser(email, username, password);

    const user = await getUserByEmail(email);
    console.log(user);

    await addUserTokenToCookie(user);

    redirect("/");
}
