'use client'

import { Skeleton } from '@/components/Skeleton'
import { Suspense } from 'react'
import { CurrentSearch } from './current-search'

export default function SearchLoadign() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
        <Skeleton className="h-[360px]" />
      </div>
    </div>
  )
}
