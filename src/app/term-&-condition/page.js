import Navbar from '@/components/Navbar'
import TermAndConditions from '@/components/TermAndConditions';
import React from 'react'

export const metadata = {
  title: "Term & Condition | Buy From India At Nepal"
};

function page() {
  return (
    <>
      <Navbar />
      <div className="relative top-16">
        <TermAndConditions />
      </div>
    </>
  )
}

export default page