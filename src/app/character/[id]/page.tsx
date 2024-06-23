import db, { schema } from "@/drizzy/drizzy";
import { eq } from "drizzle-orm";
import CharacterPage from "./page.character";
import { redirect } from "next/navigation";

export default async function Page({params} : { params: {id:string}}) {
    
    const character = (await db.select({
        id: schema.character.id,
        name: schema.character.name,
        owner: schema.character.owner,
        url: schema.character.url
    }).from(schema.character).where(eq(schema.character.id, params.id)))[0]

    if (!character) {
        redirect("/404")
    }
    
    return <main>
        <CharacterPage character={character} />
        </main>
}