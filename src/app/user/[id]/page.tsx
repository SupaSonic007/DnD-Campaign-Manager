"use server"
import ClientPage from "./page.client";
import { getUser } from "../../../utils/helpers/userHelpers";
import { getCurrentUser } from "@/utils/helpers/jwt";

export default async function Page({ params }: { params: { id: string } }) {
    const user = await getUser(params.id);
    const current = (await getCurrentUser()) == user.id;
    
    return (
        <main>
            <h1>{user.name}</h1>
            <ClientPage user={user} current={current}/>
            
        </main>
    );
}
