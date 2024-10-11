import React from 'react'

const TermAndConditions = () => {
    return (
        <>
            <div className="px-4 py-6 md:px-14">
                <h1 className="text-2xl font-bold">Term and Conditions</h1>
                <div className="pt-5">
                    <h2 className="text-xl font-semibold">1. Video Recording Requirement</h2>
                    <p className='ml-5 pt-1'>Customers are required to record a clear, continuous video while opening their parcel. This serves as crucial evidence in the event of missing items or other issues.</p>
                </div>
                <div className="pt-5">
                    <h2 className="text-xl font-semibold">2. Policy on Missing Items</h2>
                    <p className='ml-5 pt-1'>If you do not provide a video of the unboxing process, we will not be able to process any claims or complaints regarding missing or damaged items.</p>
                </div>
                <div className="pt-5">
                    <h2 className="text-xl font-semibold">3. Claim Process</h2>
                    <p className='ml-5 pt-1'>In the event of any discrepancy, the recorded video must be submitted within 48 hours of receiving the parcel. Claims without video evidence will not be entertained.</p>
                </div>
            </div>
        </>
    )
}

export default TermAndConditions