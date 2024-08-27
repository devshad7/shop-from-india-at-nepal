import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from "lucide-react"
import { brandLogo } from '@/constants/brandLogo'

const Brands = () => {
    return (
        <>
            <div className="px-4 md:px-14">
                <div className="py-16 gap-10 flex flex-col text-center">
                    <h1 className="text-2xl uppercase font-semibold text-gray-700"><span className="highlight">Brands We are accepting orders</span></h1>
                    <div className="md:flex md:justify-center md:items-center md:flex-wrap md:gap-4 cards">
                        {brandLogo.map((logo) => {
                            return (
                                <Link href={logo.href} key={logo.id}>
                                    <div className="md:h-[230px] md:w-[255px] h-44 w-48 md:shadow-lg shadow-md flex md:px-4 px-3 justify-center items-center rounded-md flex-col">
                                        <img src={logo.src} alt="" className="h-12 w-auto" />
                                        <div className="absolute mt-24">
                                            <Button className="flex gap-1 px-5 h-7 bg-[#F07431]" size='sm'>
                                                Visit
                                                <ArrowRight className='size-4' />
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                        <div className="md:h-[230px] md:w-[255px] h-44 w-48 md:shadow-lg shadow-md flex md:px-4 px-3 justify-center items-center rounded-md flex-col">
                            <h2>And many more of yours wish</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands