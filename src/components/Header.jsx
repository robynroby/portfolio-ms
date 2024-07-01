import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { Button } from './ui/button'

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Mwaura<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* <p className="text-lg mt-2">Frontend Developer</p> */}

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header