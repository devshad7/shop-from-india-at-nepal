import Calculator from '@/components/Calculator'
import Navbar from '@/components/Navbar'
import React from 'react'

export const metadata = {
  title: "Price Calculator | Buy From India At Nepal"
};

function page() {
  return (
    <>
    <Navbar />
    <Calculator />
    </>
  )
}

export default page