import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {auth, signOut, signIn} from '@/auth'
import RollingText from './RollingText'


const navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
     <nav className='flex justify-between items-center'>
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={144} height={30} />
      </Link>
      <div className="flex items-center gap-5 text-dark">
        {session && session?.user ? (
          <>
            <Link  href="/startup/create">
              <RollingText text="Create Startup" />
            </Link>

            <form action={async() => {
              'use server'
              await signOut({redirectTo: '/'});
              }}>
              <button type="submit" className='cursor-pointer'>
                <RollingText text="Logout" />
              </button>
            </form>

            <Link href={`/user/${session?.user?.id}`}>
              <RollingText text={session?.user?.name || ''} />
            </Link>
          </>
        ):(
          <form action={async () => {
            'use server'
            
            await signIn('github');
            }}>
            <button type="submit" className='cursor-pointer'>
              <RollingText text="Login" />
            </button>
          </form>
        )}
      </div>
     </nav>
    </header>
  )
}

export default navbar