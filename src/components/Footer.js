import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="py-16 px-4 md:px-14 pb-10 flex flex-col gap-3 justify-center items-center border-t border-[#f2f2f2] divide-y">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="flex gap-3 items-center font-medium text-[#505050]">
                        <img src="/assets/logo.jpeg" alt="" className="size-5 rounded-sm" />
                        <span className="text-xl">Buy From India at Nepal</span>
                    </div>
                    <div className="flex md:gap-3 px-7 md:px-0 text-[#71717A] text-sm text-center">
                        <Link href={'/privacy-policy'} className="hover:text-[#000000]">
                            <span>Privacy Policy</span>
                        </Link>
                        <Link href={'/return-policy'} className="hover:text-[#000000]">
                            <span>Return Policy</span>
                        </Link>
                        <Link href={''} className="hover:text-[#000000]">
                            <span>Shipping & Delivery</span>
                        </Link>
                        <Link href={'term-&-condition'} className="hover:text-[#000000]">
                            <span>Term & Conditions</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-[#64748B] text-sm pt-2">
                    <span>© 2024 Buy From India at Nepal. All rights reserved.</span>
                    <div className="flex flex-col justify-center items-center">
                    <a href='mailto:buyfromindiaatnepal@gmail.com'>info@buyfromindiaatnepal.com</a>
                    <a href='tel:+977-9812950301'>+977-9812950301</a>
                    </div>
                    <div className="flex gap-3 text-[#71717A]">
                        <a href="https://www.facebook.com/youchoosewedeliever" target="_blank" className="hover:text-[#1877F2]">
                            <Facebook className="size-5" />
                        </a>
                        <a href="https://www.instagram.com/buy_from_india_at_nepal/" target="_blank" className="hover:text-[#c2556b]">
                            <Instagram className="size-5" />
                        </a>
                        <a href="https://wa.me/+9779812950301" target="_blank" className="hover:text-[#25D366]">
                            <FaWhatsapp className="size-5" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer