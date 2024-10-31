import db, { schema } from "@/drizzy/drizzy";
import { character } from "@/drizzy/schema";
import { eq, like } from "drizzle-orm";

export async function addChar(charName:string, charUrl:string) {

    await db.insert(schema.character).values({   
        name: charName, 
        owner: charUrl,
        url: charUrl
    })

    return
}

export async function getChar(id:string) {
    
    var char:{name:string, url:string, owner:string}[] = await db.select().from(schema.character).where(eq(schema.character.id, id))

    return char[0]
}

export async function updateChar(id:string, character:{id:string, name:string, url:string, owner:string}) {

    await db.update(schema.character).set(character).where(eq(schema.character.id, id))

    return
}
