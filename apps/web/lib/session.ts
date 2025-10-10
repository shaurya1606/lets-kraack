"use server"
import { jwtVerify, SignJWT } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type Session = {
    user: {
        id: string,
        name: string
    };
    accessToken: string;
    // refreshToken: string;
}

const secretKey = process.env.SESSION_SECRET_KEY;
const encoder = new TextEncoder().encode(secretKey);

export async function createSession(payload: Session) {
    const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    try {
        const session = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime(expiredAt)
            .sign(encoder);

        // Debug log
        console.log("Creating session cookie with token:", session.substring(0, 20) + "...");


        const cookieStore = await cookies();
        cookieStore.set("session", session, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            expires: expiredAt,
            path: "/"
        });

        return payload;
    } catch (error) {
        console.error("Failed to create session:", error);
        throw new Error("Could not create session");
    }
}

export async function getSession(): Promise<Session | null> {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get("session")?.value;
        if (!session) return null;
        try {
            const { payload } = await jwtVerify(session, encoder, {
                algorithms: ["HS256"]
            }) as { payload: Session };

            console.log("Session verified successfully:", payload.user.name);
            return payload;
        } catch (error) {
            console.error("Invalid session token:", error);
            return null;
        }

    } catch (err) {
        console.error("Error getting session:", err);
    return null;
    }
}

export async function clearSession() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}

export async function signOut() {
    await clearSession();
    redirect("/");
}