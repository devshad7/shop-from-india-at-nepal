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
                    <div className="flex justify-center items-center flex-wrap gap-4">
                        {brandLogo.map((logo) => {
                            return (
                                <Link href={logo.href} key={logo.id}>
                                    <div className="h-[230px] md:w-[255px] w-[340px] shadow-lg flex md:px-4 justify-center items-center rounded-md flex-col">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands