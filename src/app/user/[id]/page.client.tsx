"use client";

export default function ClientPage({
    user,
}: {
    user: {
        id: string;
        name: string;
        createdAt: Date | null;
        updated: Date | null;
    };
}) {
    return (
        <ul>
            <li>{user.name}</li>
            <li suppressHydrationWarning>{user.createdAt?.toUTCString()}</li>
        </ul>
    );
}
