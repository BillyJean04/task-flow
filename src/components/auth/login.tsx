"use client";

import { Auth } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const { user } = Auth.useUser();

    useEffect(() => {
        if (user) {
            router.push("/dashboard/all-tasks");
        }
    }, [router, user]);

    return (
        <div className="flex justify-center items-center bg-[#f6f5f8] h-[100dvh] ">
            <div>
                <div className="px-16 py-7 rounded-xl bg-[#ffff] ">
                    <Auth
                        supabaseClient={supabaseClient}
                        providers={["google"]}
                        appearance={{
                            style: {
                                button: {
                                    background: "#90beff",
                                    border: "none",
                                    borderRadius: "3px",
                                    padding: "10px",
                                    fontWeight: "500",
                                },
                                input: {
                                    border: "1px solid",
                                    borderRadius: "3px",
                                    padding: "15px",
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
