'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'


export default function StoreProvider({ children }) {

  const queryClient = new QueryClient({})

  const storeRef = useRef(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>

          {children}
        </SessionProvider>
      </QueryClientProvider>
    </Provider>
  )
}