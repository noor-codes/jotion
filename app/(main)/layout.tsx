'use client'

import Navigation from './_components/navigation'

import { Spinner } from '@/components/spinner'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { useConvexAuth } from 'convex/react'

export default function MainLayout({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useConvexAuth()

  if (isLoading) {
    return (
      <div className='h-full flex items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  if (!isAuthenticated) {
    return redirect('/')
  }

  return (
    <div className='h-full flex dark:bg-[#1f1f1f]'>
      <Navigation />
      <main className='flex-1 h-full overflow-y-auto'>{children}</main>
    </div>
  )
}
