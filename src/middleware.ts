import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { Database } from "@/types/supabase";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient<Database>({ req, res });
    const session = await supabase.auth.getSession();

    // if (req.nextUrl.pathname === "/") {
    //     const redirectUrl = req.nextUrl.clone();
    //     redirectUrl.pathname = "/";
    //     return NextResponse.redirect(redirectUrl);
    // }
    if (session.data.session?.user) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = "/dashboard";
        return NextResponse.redirect(redirectUrl);
    }
    return res;
}
