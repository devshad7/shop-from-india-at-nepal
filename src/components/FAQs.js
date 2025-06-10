import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const FAQs = () => {
    return (
        <>
            <div className="px-4 md:px-14" id="how-to-order">
                <div className="md:pt-16 pb-16 text-center">
                    <h1 className="text-2xl uppercase font-semibold text-gray-700"><span className="highlight">FAQs</span></h1>
                    <div className="px-5 md:px-52 mt-10 text-left">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How long will it take for my order to arrive?</AccordionTrigger>
                                <AccordionContent>
                                    We deliver your product quickly within <strong>7-10 days.</strong>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                                <AccordionContent>
                                    <strong>We Accept</strong>
                                    <ul>
                                        <li>• E-sewa</li>
                                        <li>• Khalti</li>
                                        <li>• Kumari Bank</li>
                                        <li>• Siddhartha Bank</li>
                                        <li>• Everest Bank</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What are your shipping options and costs?</AccordionTrigger>
                                <AccordionContent>
                                    Delivery charge is <strong>NPR 200</strong> per kilogram.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>What is your return and exchange policy?</AccordionTrigger>
                                <AccordionContent>
                                    You can check at <Link href={'/return-policy'} className="font-bold underline">Retun & Exchange</Link> Policy page.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-left">What if I received a defective or incorrect item?</AccordionTrigger>
                                <AccordionContent>
                                    We will refund the full amount or send a replacement product at no additional cost.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQs