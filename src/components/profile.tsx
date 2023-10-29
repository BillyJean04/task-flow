"use client";

import { IoPersonCircleSharp } from "react-icons/io5";
import { useSupabaseClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const Profile = () => {
    const supabase = useSupabaseClient();
    const router = useRouter();

    const handleClick = async () => {
        await supabase.auth.signOut();
        router.push("/");
    };

    return (
        <div onClick={handleClick} className="flex cursor-pointer">
            <IoPersonCircleSharp size="2.3rem" />
        </div>
    );
};

export default Profile;
