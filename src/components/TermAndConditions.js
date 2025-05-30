import React from 'react'

const TermAndConditions = () => {
    return (
        <>
            <div className="px-4 py-6 md:px-14 max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold">Term and Conditions</h1>
                <ul className='list-decimal px-5 space-y-2 mt-5'>
                    <li>We place orders strictly based on the product links provided by the customer. If the website or seller turns out to be a scam or fraudulent, we are not responsible for any loss. Since such orders are prepaid, we are not obligated to provide a refund.</li>
                    <li>However, if the order was placed as Cash on Delivery (COD), we take full responsibility and will provide a 100% refund in case of any fraud or scam.</li>
                    <li>Delivery time is not fixed. As this is an international order, delays may occur due to customs, courier issues, or website processing times. We are not responsible for any inconvenience caused due to such delays.</li>
                    <li>By placing an order with us, the customer agrees to these terms and understands the associated risks.</li>
                </ul>
            </div>
        </>
    )
}

export default TermAndConditions