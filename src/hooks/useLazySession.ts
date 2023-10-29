import { useSupabaseClient } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { AuthError, Session } from "@supabase/supabase-js";

export function useLazySession() {
    const supabase = useSupabaseClient();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null);
    const [error, setError] = useState<AuthError | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data, error }) => {
            setError(error);
            setSession(data?.session);
            setLoading(false);
        });
    }, [supabase.auth]);

    return { loading, session, error };
}
