import { Button } from '@/components/ui/button'
import React from 'react'
import { getSession } from '@/lib/session';
import Link from 'next/dist/client/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getSession();
//   if(!session || !session.user) redirect("auth/signin") // protecting the page way 1 inside the page
  return (
    <>
    <div>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p>{session?.user.name}</p>
        <p className="mt-4 text-gray-600">This is your dashboard where you can manage your activities.</p>
        <div className="mt-6">
            <Link href={"/api/auth/signout"}><Button className="mr-4">Sign Out</Button></Link>
        </div>
    </div>

    </>
  )
}
