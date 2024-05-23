"use server";

import db, { schema } from "@/drizzy/drizzy";
import sha256 from "@/utils/sha256";
import { and, eq } from "drizzle-orm";
import { addUserTokenToCookie, createUserToken } from "@/utils/jwt";

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

    const user = users[0];

    if (!user) {
        return {
            message: "No user found with that username and password",
            token: null,
        };
    }

    console.log(user);

    await addUserTokenToCookie( user )

    return { message: "Great successs!" };
}
