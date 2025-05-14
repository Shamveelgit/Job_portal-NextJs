'use client'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import React, { useRef } from 'react'
import { makeStore } from '../lib/store'
export default function StoreProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient({})

  // Use the correct type for the Redux store
  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null)

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <>
      <Provider store={storeRef.current}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </QueryClientProvider>
      </Provider>
    </>

  )
}