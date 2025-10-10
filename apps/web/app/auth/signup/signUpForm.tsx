"use client"
import React, { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/ui/submitButton";
import { signUp } from "@/lib/auth";

const SignUpForm = () => {
    const [state, action] = useActionState(signUp, undefined )
    return (
        <>
            <form className="space-y-6" action={action}>
                {state?.message && <p className="text-red-500 text-sm">{state.message}</p>}
                <div>
                    <Label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </Label>
                    <div className="mt-2">
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    {state?.error?.name && <p className="text-red-500 text-sm">{state.error.name}</p>}
                </div>
                <div>
                    <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </Label>
                    <div className="mt-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    {state?.error?.email && <p className="text-red-500 text-sm">{state.error.email}</p>}
                </div>
                <div>
                    <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </Label>
                    <div className="mt-2">
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    {state?.error?.password && (
                        <div>
                            <p className="text-red-500 text-sm">Password must contain:</p>
                            <ul className="list-disc list-inside text-red-500 text-sm">
                                {state.error.password.map((error) => (
                                    <li className="text-sm text-red-500" key={error}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )
                    }
                </div>
                <div>
                    <Label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                    </Label>
                    <div className="mt-2">
                        <Input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    {state?.error?.confirmPassword && (
                        <p className="text-red-500 text-sm">
                            {state.error.confirmPassword}
                        </p>
                    )}
                </div>
                <div>
                    <SubmitButton>Sign Up</SubmitButton>
                </div>
            </form>
        </>
    )
};

export default SignUpForm;