import Link from "next/link"
import { Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex w-full flex-col">
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
                                href="#"
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
                                href=""
                                className="text-muted-foreground hover:text-foreground"
                            >
                                About
                            </Link>
                            <Link
                                href=""
                                className="text-muted-foreground hover:text-foreground"
                            >
                                How to Order
                            </Link>
                            <Link
                                href=""
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Why To Choose Us
                            </Link>
                            <Link href="" className="hover:text-foreground">
                                Contact Us
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <Link href={'/'}>
                        <Image
                            src="/assets/logo.jpeg"
                            width={35}
                            height={35}
                            alt="logo"
                            className="rounded-full md:hidden"
                        />
                    </Link>
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search here..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <Link href={'/price-calculator'}>
                        <div>
                            <Button>Price Calculator</Button>
                        </div>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar
