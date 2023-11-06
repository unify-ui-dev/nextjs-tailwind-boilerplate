"use client"

import { AppNavbar } from '@/components/elements';
import Footer from '@/components/elements/footer';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute='class' storageKey='unify-theme' defaultTheme='dark' enableSystem>
    <AppNavbar />
    {children}
    <Footer />
  </ThemeProvider>
}