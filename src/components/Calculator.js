"use client"

import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const Calculator = () => {

  const [price, setPrice] = useState("")
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState(null);
  const [isHidden, setIsHidden] = useState("hidden")
  const [productPrice, setProductPrice] = useState(null)
  const [charge, setCharge] = useState(null)
  const [DeliveryCharge, setDeliveryCharge] = useState('200')

  const handleCalculate = () => {
    let numericPrice = parseFloat(price);
    let numericWeight = parseFloat(weight);

    setProductPrice(numericPrice * 1.65);

    if (isNaN(numericPrice) || isNaN(numericWeight)) {
      alert('Please enter valid numbers for price and weight.');
      return;
    }

    // Calculate the additional cost based on weight
    let additionalCost = Math.ceil(numericWeight / 1000) * 200;
    let percentage = numericPrice / 100 * 25;

    setCharge(percentage + additionalCost * 1.65)

    if (numericPrice < 1500) {
      const mainCalc = numericPrice + percentage + 100;
      numericPrice = mainCalc * 1.65;
      setIsHidden("block")

    } else {
      const mainCalc = numericPrice + percentage;
      numericPrice = mainCalc * 1.65;
    }

    // Add the additional cost based on weight
    const finalPrice = numericPrice + additionalCost;
    setResult(finalPrice.toFixed(0));
    setIsHidden("block")

  };

  return (
    <>
      <div className="h-[88vh] md:h-[100vh] w-[100%] flex justify-center items-center">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Input type="number" placeholder="Enter product price in INR" value={price} onChange={(e) => setPrice(e.target.value)} />
              <Input type="number" placeholder="Enter product weight in gram" className="md:w-72 w-72" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className={isHidden}>
              <div className="relative bg-green-100 px-5 py-3">
                <p><strong>Total Price: </strong>{result + " " + "NPR"}</p>
              </div>
            </div>
            <Button onClick={handleCalculate}>Calculate</Button>
            <div className={isHidden}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>See price breakdown</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>• Product price: {productPrice}</li>
                      <li>• Import & Service charge: {charge}</li>
                      <li>• Delivery charge: {DeliveryCharge}</li>
                      <li>• <strong>Total price: </strong>{result + " "}<strong>NPR</strong></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator