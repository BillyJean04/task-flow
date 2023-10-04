import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SupabaseProvider } from "@/lib/supabase";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Task Flow",
    description: "Task Management App.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SupabaseProvider>
            <html lang="en">
                <body className={openSans.className}>{children}</body>
            </html>
        </SupabaseProvider>
    );
}
