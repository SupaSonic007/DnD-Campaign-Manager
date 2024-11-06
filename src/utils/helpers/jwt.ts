// https://github.com/RiskyMH/Forms/blob/main/app/utils/jwt.ts

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const getUserByToken = cache(
    async (token: string): Promise<string | null> => {
        const jwt = await jwtVerify(token, secret, { algorithms: ["HS256"] });
        const userId = jwt.payload.sub;
        if (!userId) return null;

        return userId;
    }
);

export function createUserToken(user: { id: string }) {
    return new SignJWT()
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setNotBefore("-1min")
        .setExpirationTime("90d")
        .setSubject(user.id.toString())
        .sign(secret);
}

export async function addUserTokenToCookie(user: { id: string }) {
    const token = await createUserToken(user);
    cookies().set("token", token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        path: "/",
    });
}

export async function getCurrentUser() {
    const token = cookies().get("token");
    if (!token) return null;
    try {
        return await getUserByToken(token.value);
    } catch (e) {
        console.log(e);
        return null;
    }
}
