'use client'

import { useEffect } from 'react'

export default function UrlCleaner({ pathName }: { pathName: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === pathName) {
      window.history.replaceState(null, '', '/')
    }
  }, [])

  return null
}