import React from 'react'

const About = () => {
    return (
        <div className="px-4 md:px-14" id="about">
            <div className="py-16 text-center">
            <h1 className="text-2xl uppercase font-semibold text-gray-700"><span className="highlight">About Us</span></h1>
                <div className="flex flex-col md:flex-row py-16 md:px-28 px-4 md:gap-40 gap-7 justify-center">
                    <img src="/assets/logo.jpeg" alt="" className="h-80 w-auto rounded-md" />
                    <div className="text-left">
                        <p className="md:text-lg text-base"><strong>Buy From India at Nepal</strong> is a trusted service that bridges the gap between Nepalese
                            shoppers and the vast selection of products available on Indian e-commerce platforms.
                            Established over four years ago, we have been dedicated to helping customers in Nepal easily access
                            and purchase items from popular Indian websites. Whether it&apos;s the latest fashion trends, electronic gadgets, or any
                            other product that catches your eye, simply choose your desired item, and we&apos;ll handle the rest. Our hassle-free
                            service ensures that your orders are placed and delivered straight to your doorstep in Nepal, saving you time
                            and effort. Experience seamless shopping with us, and enjoy the convenience of getting your favorite products from
                            India without any of the usual cross-border challenges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About