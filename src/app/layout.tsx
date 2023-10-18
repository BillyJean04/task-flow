import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SupabaseProvider } from "@/lib/supabase";
import { ApolloGraphqlProvider } from "@/lib/apollo";
import TaskModalProvider from "@/contexts/taskModalContext";
import { ReactNode } from "react";
import TaskModal from "@/components/modal/taskModal";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Task Flow",
    description: "Task Management App.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <SupabaseProvider>
            <ApolloGraphqlProvider>
                <TaskModalProvider>
                    <html lang="en">
                        <body className={openSans.className}>
                            <TaskModal />
                            {children}
                        </body>
                    </html>
                </TaskModalProvider>
            </ApolloGraphqlProvider>
        </SupabaseProvider>
    );
}
