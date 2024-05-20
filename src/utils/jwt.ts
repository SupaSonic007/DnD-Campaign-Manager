import { jwtVerify, SignJWT } from "jose";

const JWTToken = new TextEncoder().encode(process.env.JWT_TOKEN)

export const createUserToken = (user: { id: string }) => {
    return new SignJWT()
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setNotBefore("-1min")
        .setExpirationTime("7d")
        .setSubject(user.id.toString())
        .sign(JWTToken)
}