import Link from "next/link"
import { InstagramIcon, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"
import AnnouncementBar from "./ui/announcement-bar"

const Navbar = () => {
    return (
        <div className="flex w-full flex-col fixed z-50">
            <AnnouncementBar />
            <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-14">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Image
                            src="/assets/logo.jpeg"
                            width={40}
                            height={40}
                            alt="logo"
                            className="rounded-full"
                        />
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <img src='/assets/logo.jpeg' className="h-7 w-7" />
                            </Link>
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                About
                            </Link>
                            <Link
                                href="#how-to-order"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                How to Order
                            </Link>
                            <Link
                                href="#why-to-choose-use"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Why To Choose Us
                            </Link>
                            <Link href="/contact" className="hover:text-foreground">
                                Contact Us
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full justify-between items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <Link href={'/'}>
                        <Image
                            src="/assets/logo.jpeg"
                            width={35}
                            height={35}
                            alt="logo"
                            className="rounded-full md:hidden"
                        />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 text-slate-700">
                            <a href="https://www.instagram.com/buy_from_india_at_nepal/">
                                <InstagramIcon className={'h-[26px] w-[26px]'} />
                            </a>
                            <a href="https://wa.me/+9779812950301?text=Hii">
                                <FaWhatsapp className={'h-[26px] w-[26px]'} />
                            </a>
                        </div>
                        <Link href={'/price-calculator'}>
                            <div>
                                <Button>Price Calculator</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
