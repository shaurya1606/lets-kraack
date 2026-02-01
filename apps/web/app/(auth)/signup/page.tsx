import Link from "next/link";
import React from "react";
import SignUpForm from "./signUpForm";


const SignUpPage = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                    <SignUpForm />
                    <Link href="/auth/signin" className="text-sm text-blue-600 hover:underline">
                        Already have an account? Log in
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;