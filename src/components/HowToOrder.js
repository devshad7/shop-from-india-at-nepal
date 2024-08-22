import React from 'react'

const HowToOrder = () => {
    return (
        <div className="px-4 md:px-14">
            <div className="text-center">
            <h1 className="text-2xl uppercase font-semibold text-gray-700"><span className="highlight">How to order</span></h1>
                <div className="flex flex-col md:flex-row py-16 pb-12 md:gap-20 gap-5 md:px-28 justify-center items-center">
                    <div className="h-48 md:w-96 w-[340px] px-10 py-6 border rounded-md">
                        <strong className="text-center underline">Step 1</strong>
                        <ul className="text-left list-disc text-sm mt-4">
                            <li><p>🌐 Visit any brand website or app with the region in india like Amazon, Myntra, Flipkart etc.</p></li>
                        </ul>
                    </div>
                    <div className="h-48 md:w-96 w-[340px] px-10 py-6 border rounded-md">
                        <strong className="text-center underline">Step 2</strong>
                        <ul className="text-left list-disc text-sm mt-4">
                            <li><p>🔗 Send us the product URL on our Whatsapp or Instagram</p></li>
                        </ul>
                    </div>
                    <div className="h-48 md:w-96 w-[340px] px-10 py-6 border rounded-md">
                        <strong className="text-center underline">Step 3</strong>
                        <ul className="text-left list-disc text-sm mt-4">
                            <li><p>💵 Pay half amount of order value for confirmed order.</p></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 pb-16 px-10 md:px-14">
                    <strong className="underline">Please Note: </strong>
                    <ul className="list-disc text-left md:leading-loose leading-normal flex flex-col gap-2">
                        <li><p>To place an order, you are required to pay at least 50% of the total order value upfront.</p></li>
                        <li><p>The remaining 50% of the order value must be paid before we dispatch your product.</p></li>
                        <li><p>Once the full payment is received, your order will be dispatched via courier.</p></li>
                        <li><p>Delivery times may vary due to uncircumstantial enforcement such as weather conditions, <br />customs delays, or any other unexpected event.</p></li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}

export default HowToOrder