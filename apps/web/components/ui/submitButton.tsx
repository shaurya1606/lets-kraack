"use client"
import React from 'react'
import { Button } from './button'
import { useFormStatus } from 'react-dom';

export default function SubmitButton({children}: {children: React.ReactNode}) {

    const { pending } = useFormStatus();

    return (
    <Button type="submit" aria-disabled={pending} className='w-full mt-2'>{pending ? "Submitting..." : children}</Button>
  )
}
