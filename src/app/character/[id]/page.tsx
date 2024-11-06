import db, { schema } from "@/drizzy/drizzy";
import { eq } from "drizzle-orm";
import CharacterPage from "./page.character";
import { redirect } from "next/navigation";
import { getChar } from "@/utils/helpers/charHelpers";

export default async function Page({ params }: { params: { id: string } }) {
    const character = await getChar(params.id);

    if (!character) {
        redirect("/404");
    }

    return (
        <main>
            <CharacterPage character={character} />
        </main>
    );
}
