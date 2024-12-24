"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
    return (
        <>
            <div className="px-4 md:px-14">
                <div className="md:py-8 py-5 md:h-[600px] h-56 overflow-hidden rounded-md">
                    <Carousel plugins={[Autoplay({ delay: 5000, })]}>
                        <CarouselContent>
                            <CarouselItem>
                                <img src="./assets/banner.jpeg" alt="" className='object-cover md:h-auto h-full w-full rounded-md' />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Hero