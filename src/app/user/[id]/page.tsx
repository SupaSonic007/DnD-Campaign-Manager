import db, { schema } from "@/drizzy/drizzy";
import { eq } from "drizzle-orm";
import ClientPage from "./page.client";

export default async function Page({params} : { params: {id:string}}) {
    
    const user = (await db.select({
        id: schema.user.id,
        username: schema.user.username,
        createdAt: schema.user.createdAt,
        updated: schema.user.updated
    }).from(schema.user).where(eq(schema.user.id, params.id)))[0]
    
    return <main>
        <h1>{user.username}</h1>
        <ClientPage user={user} />
        </main>
}