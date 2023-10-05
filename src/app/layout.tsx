import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SupabaseProvider } from "@/lib/supabase";
import { ApolloGraphqlProvider } from "@/lib/apollo";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Task Flow",
    description: "Task Management App.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SupabaseProvider>
            <ApolloGraphqlProvider>
                <html lang="en">
                    <body className={openSans.className}>{children}</body>
                </html>
            </ApolloGraphqlProvider>
        </SupabaseProvider>
    );
}
