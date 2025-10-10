import React from 'react';
import HomePage from './Home/page';
import { getSession } from '@/lib/session';
import Dashboard from './dashboard/page';


export default async function Home() {
  const session = await getSession();
  return (
   <>
     {!session || !session.user ? (
            <>
               <HomePage />
            </>
        ): (
            <>
              <Dashboard />
            </>
        )}
   </>
  );
}