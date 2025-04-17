"use client"

import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Label } from "./ui/label"
import CalcAlert from "./CalcAlert"

const Calculator = () => {

  const [price, setPrice] = useState("")
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState(null);
  const [isHidden, setIsHidden] = useState("hidden")
  const [productPrice, setProductPrice] = useState(null)
  const [charge, setCharge] = useState(null)
  const [DeliveryCharge, setDeliveryCharge] = useState(null)

  const handleCalculate = () => {
    let numericPrice = parseFloat(price);
    let numericWeight = parseFloat(weight);

    // product price
    let prodPrice = numericPrice * 1.65;
    setProductPrice(prodPrice.toFixed(0));

    if (isNaN(numericPrice) || isNaN(numericWeight)) {
      alert('Please enter valid numbers for price and weight.');
      return;
    }

    // Calculate the additional cost based on weight
    let additionalCost = Math.ceil(numericWeight / 1000) * 200;
    setDeliveryCharge(additionalCost)
    let percentage = numericPrice / 100 * 25;
    let finalPercentage = percentage * 1.65;

    // charges
    setCharge(finalPercentage.toFixed(0))

    // if (numericPrice < 1500) {
    //   const mainCalc = numericPrice + percentage + 100;
    //   numericPrice = mainCalc * 1.65;
    //   setIsHidden("block")

    // } else {
    //   const mainCalc = numericPrice + percentage;
    //   numericPrice = mainCalc * 1.65;
    // }

    // Add the additional cost based on weight

    if (numericPrice < 1500) {
      const finalPrice = prodPrice + finalPercentage + additionalCost;
      const addP = finalPrice + 165;
      const finalCharge = finalPercentage + 165;
      setCharge(finalCharge.toFixed(0))
      setResult(addP.toFixed(0))
    } else {
      const finalPrice = prodPrice + finalPercentage + additionalCost;
      setResult(finalPrice.toFixed(0))
    }
    // setResult(finalPrice.toFixed(0));
    setIsHidden("block")

  };

  return (
    <>
      <div className="h-[88vh] md:h-[100vh] w-[100%] flex justify-center items-center">
        <div>
          <div className="flex flex-col gap-4">
            <CalcAlert />
            <div className="flex flex-col gap-3">
              <div className="">
                <Label htmlFor="price" className={'text-slate-600 text-xs'}>Price (INR)</Label>
                <Input type="number" id="price" placeholder="Enter product price in INR" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="">
                <Label htmlFor="weight" className={'text-slate-600 text-xs'}>Wight (g)</Label>
                <Input type="number" id="weight" placeholder="Enter product weight in gram" className="md:w-80 w-80" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
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