"use server";

import db, { schema } from "@/drizzy/drizzy";
import sha256 from "@/utils/sha256";
import { eq, or } from "drizzle-orm";
import { addUserTokenToCookie } from "@/utils/jwt";

export async function register(prevData: any, data: FormData) {
    const email = data.get("email") as string;
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    const hashedPassword = await sha256(password);

    let users = await db
        .select()
        .from(schema.user)
        .where(
            or(eq(schema.user.email, email), eq(schema.user.username, username))
        );

    if (users.length > 0) {
        const emailTaken = users.map((u) => u.email).includes(email);
        const usernameTaken = users.map((u) => u.username).includes(username);

        return {
            message: `${emailTaken ? "Email" : ""}${
                emailTaken && usernameTaken ? " & " : ""
            }${usernameTaken ? "Username" : ""} taken. Make it better.`,
        };
    }

    await db
        .insert(schema.user)
        .values({ email: email, username: username, password: hashedPassword });

    const user = (await db
        .select()
        .from(schema.user)
        .where(eq(schema.user.email, email)))[0];
    console.log(user);

    await addUserTokenToCookie( user );
}
