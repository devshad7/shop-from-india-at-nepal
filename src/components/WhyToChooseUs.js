import { Globe, Tag, Headset } from 'lucide-react'

const WhyToChooseUs = () => {
    return (
        <>
            <div className="px-4 md:px-14">
                <div className="py-16 pb-24 text-center flex flex-col justify-center items-center">
                    <h1 className="text-2xl uppercase font-semibold text-gray-700"><span className="highlight">Why To Choose Us</span></h1>
                    <div className="flex flex-col md:flex-row md:gap-36 gap-20 pt-20">
                        <div className="flex flex-col items-center gap-4">
                            <div className="bg-[#c2ecfa] flex justify-center items-center size-10 rounded-full">
                                <Globe className='size-5' />
                            </div>
                            <h2 className="font-semibold text-gray-700 text-lg">Fast and Relaible Sevice</h2>
                            <p className="text-sm">We deliver your product quickly <br /> within 7-10 days</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="bg-[#c2ecfa] flex justify-center items-center size-10 rounded-full">
                                <Tag className='size-5' />
                            </div>
                            <h2 className="font-semibold text-gray-700 text-lg">Genuine Charges</h2>
                            <p className="text-sm">No hidden fees—just transparent, fair pricing.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="bg-[#c2ecfa] flex justify-center items-center size-10 rounded-full">
                                <Headset className='size-5' />
                            </div>
                            <h2 className="font-semibold text-gray-700 text-lg">Easy Customer Support</h2>
                            <p className="text-sm">Our support team is here for you timing 07:00AM to 10:30PM <br />+977 981295031</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyToChooseUs