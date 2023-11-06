import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'


const dms = DM_Sans({ subsets:['latin'], weight:["800" ,"700", "600", "500","400","300","200"] })

export const metadata: Metadata = {
  title: 'Next Js Starter',
  description: 'NextJs + TailwindCSS Boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        `${dms.className} bg-neutral-50 dark:bg-neutral-950 min-h-screen flex flex-col`
      }>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
