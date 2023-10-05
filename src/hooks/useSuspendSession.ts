import { useSupabaseClient } from "@/lib/supabase";
import { suspend } from "suspend-react";

export function useSuspendSession() {
    const supabaseClient = useSupabaseClient();
    return suspend(async () => {
        const { data, error } = await supabaseClient.auth.getSession();

        if (error) {
            throw error;
        }

        return data.session!;
    }, ["session"]);
}
