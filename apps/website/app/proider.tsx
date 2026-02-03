'use client'

import { ThemeProvider } from 'next-themes'

export const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {props.children}
    </ThemeProvider>
  )
}
