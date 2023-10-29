"use client";
import { ReactNode } from "react";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { useLazySession } from "@/hooks/useLazySession";

export function ApolloGraphqlProvider({ children }: { children: ReactNode }) {
    const { session } = useLazySession();

    const httpLink = createHttpLink({
        uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/graphql/v1`,
        headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            authorization: `Bearer ${session ? session.access_token : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
