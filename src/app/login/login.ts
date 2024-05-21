"use server";

import db, { schema } from "@/drizzy/drizzy";
import sha256 from "@/utils/sha256";
import { and, eq } from "drizzle-orm";

export async function auth(prevData: any, data: FormData) {
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const users = await db
        .select()
        .from(schema.user)
        .where(
            and(
                eq(schema.user.email, email),
                eq(schema.user.password, await sha256(password))
            )
        );

    if (users.length == 0) {
        return {
            message: "No user found with that username and password",
        };
    }

    const user = await db
        .select()
        .from(schema.user)
        .where(eq(schema.user.email, email));
    console.log(user);

    return { message: "Great successs!" };
}
