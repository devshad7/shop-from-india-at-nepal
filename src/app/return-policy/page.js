import Calculator from '@/components/Calculator'
import Navbar from '@/components/Navbar'
import ReturnPolicy from '@/components/ReturnPolicy';
import React from 'react'

export const metadata = {
  title: "Return Policy | Buy From India At Nepal"
};

function page() {
  return (
    <>
    <Navbar />
    <ReturnPolicy />
    </>
  )
}

export default page