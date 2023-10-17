import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins({ weight: '400', variable: '--font-poppins', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interface Chakra UI',
  description: 'New App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
