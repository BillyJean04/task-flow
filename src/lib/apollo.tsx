"use client";
import { ReactNode } from "react";
import { useSuspendSession } from "@/hooks/useSuspendSession";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";

export function ApolloGraphqlProvider({ children }: { children: ReactNode }) {
    const session = useSuspendSession();

    const httpLink = createHttpLink({
        uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/graphql/v1`,
        headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            authorization: `Bearer ${session?.access_token}`,
        },
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
