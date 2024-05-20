"use server";

import db, { schema } from "@/drizzy/drizzy";
import sha256 from "@/utils/sha256";
import { and, eq } from "drizzle-orm";

export async function auth(prevData: any, data: FormData) {
    const users = await db
        .select()
        .from(schema.user)
        .where(
            and(
                eq(schema.user.email, data.get("email") as string),
                eq(
                    schema.user.password,
                    await sha256(data.get("password") as string)
                )
            )
        );

    if (users.length == 0) {
        return {
            message: "No user found with that username and password",
        };
    }

    return { message: "Great successs!"};
}
