"use server"
import { FormState } from "./types";
import { SignupFormSchema } from "./types";
import { BACKEND_URL } from "./constants";
import { redirect } from "next/navigation";
import { LoginFormSchema } from "./types";
import { createSession } from "./session";

export async function signUp(state: FormState, formData: FormData): Promise<FormState> {
    const validationFields = SignupFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirm-password"),
    });

    console.log("Using BACKEND_URL:", BACKEND_URL);

    if(!validationFields.success) {
        return { error: validationFields.error.flatten().fieldErrors };
    }

    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validationFields.data),
    });
    if (!response.ok) {
        return {
            message:
                response.status === 409
                    ? "User with this email already exists"
                    : response.statusText
        }
    }
    else {
        redirect('/auth/signin');
    }
}

export async function signIn(state: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return { 
            error: validatedFields.error.flatten().fieldErrors 
        };
    }

    const response = await fetch(`${BACKEND_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
        return {
            message:
                response.status === 401
                    ? "Invalid email or password"
                    : response.statusText
        };
    }

    const result = await response.json();
    await createSession({
        user : {
            id:result.id,
            name: result.name
        },
        accessToken: result.accessToken,
    })

    redirect('/dashboard');
}