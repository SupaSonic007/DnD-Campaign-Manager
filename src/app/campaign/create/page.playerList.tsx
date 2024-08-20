"use server";
import db, { schema } from "@/drizzy/drizzy";
import { campaign } from "@/drizzy/schema";
import { and, eq, like } from "drizzle-orm";

export async function PlayerList() {
    var playerList: {id:string, name:string}[] = await search_players("");

    // put all players in the campaign into a list
    const playerListUL = (
        <>
            <ul>

            {playerList.map((player) => (
                <li key={player.name}><a href={`/user/${player.id}`}>{player.name}</a></li>
            ))}

            </ul>
        </>
    );

    return playerListUL;
}

async function search_players(input: string) {

    // var players:{name:string, id:string}[] = await db.select({id: schema.campaignAuth.id, name: schema.user.username}).from(schema.campaignAuth).where(like(schema.user.username, `${input}%`))
    var players:{name:string, id:string}[] = []
    return players;
}
