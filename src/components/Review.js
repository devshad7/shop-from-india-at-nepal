import Script from 'next/script'
import React from 'react'

const Review = () => {
    return (
        <>
            <div className="px-4 md:px-14">
                <Script src="https://static.elfsight.com/platform/platform.js" async></Script>
                <div className="elfsight-app-cc28c577-0373-45fb-9cbf-e4570baaf981" data-elfsight-app-lazy></div>
            </div>
        </>
    )
}

export default Review