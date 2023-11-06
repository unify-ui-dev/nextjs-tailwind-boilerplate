import React from 'react'
import { AppContainer, ThemeSwitche } from '../atoms'
import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
    return (
        <header className="fixed left-0 top-0 py-4 h-20 flex items-center w-full">
            <AppContainer className="w-full">
                <nav className="flex items-center justify-between">
                    <div className="flex">
                        <Link href="/" className="p-3 rounded-lg bg-gradient-to-tr from-neutral-200 to-purple-100 dark:from-neutral-900 dark:from-70% dark:to-purple-950">
                            <Image src="/logo-dark.svg" width="100" height="200" alt="Unify Logo dark" className="w-6 h-auto hidden dark:flex" />
                            <Image src="/logo-light.svg" width="100" height="200" alt="Unify Logo" className="w-6 h-auto flex dark:hidden" />
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-4 pl-5">
                        <Link href="#" target="_blank" aria-label="Go to GIthub" className="rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                            <span aria-hidden="true" className="text-neutral-800 dark:text-neutral-200 flex">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                        <ThemeSwitche />
                    </div>
                </nav>
            </AppContainer>
        </header>
    )
}
