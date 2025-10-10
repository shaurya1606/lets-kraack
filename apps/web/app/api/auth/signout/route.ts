import { clearSession } from "@/lib/session";
import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
    await clearSession();
    revalidatePath("/");
    return NextResponse.redirect(new URL("/", request.nextUrl));
}