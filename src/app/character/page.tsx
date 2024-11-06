"use server"

import { getUserChars } from "@/utils/helpers/charHelpers";
import { getCurrentUser } from "@/utils/helpers/jwt";

export default async function Page() {
    const currentUser = await getCurrentUser()
    const chars = currentUser ? await getUserChars(currentUser) : []

    return <main>
            {chars.map((char) => (
                <ul key={char.id}>
                    <a href={char.url}>{char.name}</a>
                </ul>
            ))}
    </main>;
}