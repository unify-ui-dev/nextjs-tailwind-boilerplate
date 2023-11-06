import { AppContainer } from "../atoms";


export default function HeroBlock() {
    return (
        <section className="py-32 flex items-center w-full">
            <AppContainer className="text-center space-y-10 mx-auto">
                <div className="relative w-max mx-auto before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-neutral-300 before:dark:from-neutral-800">
                    <span
                        className="relative rounded-md px-4 py-1 bg-gradient-to-t from-neutral-200 to-white dark:from-neutral-800 dark:to-neutral-950">Under
                        development</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent
                    bg-clip-text bg-gradient-to-tr from-neutral-950 to-neutral-500 dark:from-neutral-400 dark:to-neutral-200 font-extrabold max-w-4xl mx-auto">
                    Design faster your website with all ease
                </h1>
                <p className="text-neutral-700 dark:text-neutral-300 mx-auto max-w-xl">
                    Collection of modern and elegant blocks and components for creating beautifull website with UnoCss
                </p>
                <div className="w-full flex flex-col items-center justify-center">
                    <form className="flex w-full max-w-lg relative items-center gap-x-3">
                        <input type="email" placeholder="johndoe@gmail.com"
                            className="text-neutral-600 dark:text-neutral-400
                            bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 outline-none flex-1 rounded-md py-3 px-5" />
                        <button className="bg-gradient-to-tr from-40% from-neutral-800 to-purple-950 rounded-md border border-neutral-800 text-neutral-100 text-sm px-5 py-3 ring-offset-2 ring-offset-neutral-950 focus:ring-2 ring-neutral-900 dark:ring-white">
                            Get Started
                        </button>
                    </form>
                </div>
            </AppContainer>
        </section>
    )
}
