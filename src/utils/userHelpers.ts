import db, { schema } from "@/drizzy/drizzy";
import { eq, or, like } from "drizzle-orm";
import sha256 from "./sha256";

export async function searchLikeUsers(input: string) {
    var users: { name: string; id: string }[] = await db
        .select({ id: schema.user.id, name: schema.user.username })
        .from(schema.user)
        .where(like(schema.user.username, `${input}%`));

    return users;
}

export async function getUser(inputID: string) {
    var user: {
        id: string;
        name: string;
        createdAt: Date | null;
        updated: Date | null;
    }[] = await db
        .select({
            id: schema.user.id,
            name: schema.user.username,
            createdAt: schema.user.createdAt,
            updated: schema.user.updated,
        })
        .from(schema.user)
        .where(eq(schema.user.id, inputID));

    return user[0];
}

export async function addUser(
    email: string,
    username: string,
    password: string
) {
    const hashedPassword = await sha256(password);
    await db
        .insert(schema.user)
        .values({ email: email, username: username, password: hashedPassword });
}

export async function checkUserExists(email: string, username: string) {
    const users = await db
        .select()
        .from(schema.user)
        .where(
            or(eq(schema.user.email, email), eq(schema.user.username, username))
        );

    if (users.length > 0) {
        // Determine error message
        const emailTaken = users.map((u) => u.email).includes(email);
        const usernameTaken = users.map((u) => u.username).includes(username);

        return [emailTaken, usernameTaken];
    }
    // If there are none alike, it doesn't exist
    return [false, false];
}

export async function getAllUsers() {
    let users = await db.select().from(schema.user);

    return users;
}

export async function getUserByEmail(email: string) {
    const user = (
        await db.select().from(schema.user).where(eq(schema.user.email, email))
    )[0];

    return user;
}
