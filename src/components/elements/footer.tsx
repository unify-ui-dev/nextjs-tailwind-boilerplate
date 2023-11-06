import Link from "next/link"


const footerItems = [
    {
        id: 1,
        text: "Home",
        link: "#"
    },
    {
        id: 1,
        text: "About",
        link: "#"
    },
    {
        id: 1,
        text: "Services",
        link: "#"
    },
]

const socialLinks = [
    {
        id: 1,
        link: "#",
        icon: (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
            </svg>
        )
    },
    {
        id: 2,
        link: "#",
        icon: (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
            </svg>
        )
    },
    {
        id: 3,
        link: "#",
        icon: (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
            </svg>
        )
    },
    {
        id: 4,
        link: "#",
        icon: (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd" />
                <path d="M3 5.012H0V15h3V5.012Z" />
            </svg>
        )
    },
]
export default function Footer() {
    return (
        <footer className="text-neutral-700 dark:text-neutral-300 px-5 py-2">
            <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-7xl mx-auto px-6 py-4 md:py-3 flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-14 rounded-lg">
                <div className="md:flex-1">
                    <Link href="#">
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-800 to-purple-400 font-bold text-2xl">U</span> Unify-Ui
                    </Link>
                </div>
                <nav>
                    <ul className="flex flex-wrap items-center justify-center gap-6">
                        {
                            footerItems.map(footerItem => (
                                <li key={footerItem.id}>
                                    <Link href={footerItem.link} className="hover:text-purple-600 dark:hover:text-purple-500 duration-200">
                                        {footerItem.text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className="md:flex-1 flex justify-center md:justify-end gap-3">
                    {
                        socialLinks.map(socialLink => (
                            <a key={socialLink.id} href={socialLink.link} target="_blank" rel="noreferer" aria-label="social link">
                                { socialLink.icon }
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer >
    )
}
