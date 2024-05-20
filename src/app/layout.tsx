import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
// const moriaCitadel = localFont({ src:'./fonts/moria-citadel/MoriaCitadel.TTF' })
// const wizzta = localFont({src: '../../../public/fonts/wizzta/wizzta.ttf'})

export const metadata: Metadata = {
  title: "D&D Campaign Manager",
  description: "D&D Campaign Manager Online",
};

let loggedIn = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          {/* Navitems for left */}
          <ul>
            <div className="navLeft">
              <a href="/" className="navitem"><li>Home</li></a>
              <a href="/about" className="navitem"><li>About Us</li></a>
              <a href="/test" className="navitem"><li>test</li></a>
            </div>
            {/* Profile & Profile Specific Links */}
            {/* If logged in, show profile page */}
            <div className="navRight">
            { loggedIn == true ? 
              <a href="#" className="navitem"><li>Profile</li></a>:
              <a href="/login" className="navitem"><li>Login</li></a>
            }
            </div>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
