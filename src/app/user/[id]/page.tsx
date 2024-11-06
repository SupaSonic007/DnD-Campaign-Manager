import db, { schema } from "@/drizzy/drizzy";
import { eq } from "drizzle-orm";
import ClientPage from "./page.client";
import { getUser } from "../../../utils/helpers/userHelpers";

export default async function Page({ params }: { params: { id: string } }) {
    const user = await getUser(params.id);

    return (
        <main>
            <h1>{user.name}</h1>
            <ClientPage user={user} />
        </main>
    );
}
