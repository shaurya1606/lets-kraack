import React from 'react';
import { getSession } from '@/lib/session';



export default async function Home() {
  const session = await getSession();
  return (
   <>
     {!session || !session.user ? (
            <>
               {/* public page */}
            </>
        ): (
            <>
            {/* protected page */}
            </>
        )}
   </>
  );
}