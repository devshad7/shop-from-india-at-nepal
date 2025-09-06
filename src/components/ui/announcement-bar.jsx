import Link from 'next/link'
import React from 'react'

const AnnouncementBar = () => {
    return (
        <div className="flex items-center justify-center bg-[#363636] px-5 md:px-20 text-white text-[15px] py-2 font-light">
            <h1 className="text-navbar-active text-xs md:text-sm text-center">Connect with us on Viber 📲 <Link href={"viber://chat?number=%2B9779812950301"} className='underline'>+977-9812950301</Link></h1>
        </div>
    )
}

export default AnnouncementBar

