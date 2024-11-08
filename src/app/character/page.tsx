"use server"

import { getUserChars } from "@/utils/helpers/charHelpers";
import { getCurrentUser } from "@/utils/helpers/jwt";
import Link from "next/link";

export default async function Page() {
    const currentUser = await getCurrentUser()
    const chars = currentUser ? await getUserChars(currentUser) : []

    return <main>
        <h1>Characters</h1>
            <div id="characters" style={{paddingLeft:"20px"}}>
            <Link href="./character/create"><button>Create</button></Link>
            {chars.map((char) => (
                <ul key={char.id}>
                    <a href={char.url}>{char.name}</a>
                </ul>
            ))}
            </div>
    </main>;
}