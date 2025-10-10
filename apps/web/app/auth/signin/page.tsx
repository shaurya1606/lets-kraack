import React from 'react'
import Link from 'next/link'
import SignInForm from './signInForm'

function SignInPage() {
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <SignInForm />
                    <Link href="/auth/signup" className="text-sm text-blue-600 hover:underline">
                        Don't have an account? Sign up
                    </Link>
                </div>
            </div>
    </>
  )
}

export default SignInPage;