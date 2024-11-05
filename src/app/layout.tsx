import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getCurrentUser } from "@/utils/helpers/jwt";
import "./globals.css";
import db, { schema } from "@/drizzy/drizzy";
import { eq } from "drizzle-orm";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "D&D Campaign Manager",
    description: "D&D Campaign Manager Online",
};


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userID = await getCurrentUser();
    let user;
    if (userID) {
        user = (await db
            .select()
            .from(schema.user)
            .where(eq(schema.user.id, userID)))[0];
    }
    return (
        <html lang="en">
            <body className={inter.className}>
                <nav>
                    {/* Navitems for left */}
                    <ul>
                        <div className="navLeft">
                            <Link href="/" className="navitem">
                                <li>Home</li>
                            </Link>
                            <Link href="/about" className="navitem">
                                <li>About Us</li>
                            </Link>
                            {/* <Link href="/test" className="navitem">
                                <li>test</li>
                            </Link> */}
                        </div>
                        {/* Profile & Profile Specific Links */}
                        {/* If logged in, show profile page */}
                        <div className="navRight">
                            {user? (
                                <Link href={`/user/${userID}`} className="navitem">
                                    <li>{user?.username}</li>
                                </Link>
                            ) : (
                                <Link href="/login" className="navitem">
                                    <li>Login</li>
                                </Link>
                            )}
                        </div>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}
