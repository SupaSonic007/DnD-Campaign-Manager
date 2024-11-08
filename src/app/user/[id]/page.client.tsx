"use client";

import logout from "@/utils/helpers/logout"
import { useFormState } from "react-dom";

export default function ClientPage(
    {
        user,
        current
    }: {
        user: {
            id: string;
            name: string;
            createdAt: Date | null;
            updated: Date | null;
        };
        current: boolean
    },
) {
    return (
        <ul>
            <li>{user.name}</li>
            <li suppressHydrationWarning>{user.createdAt?.toUTCString()}</li>
            <br />
            <br />
            <br />
            {current ? <form action={logout}><button>Logoout</button></form> : null}
        </ul>
    );
}
