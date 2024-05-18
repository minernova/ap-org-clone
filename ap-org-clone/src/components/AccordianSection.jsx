import React from 'react'
import FAQAccordian from './FAQAccordian';

const arr=[1,2,3];
export default function AccordianSection() {
  return (
    <>
        {arr.map((i)=>{
            return <FAQAccordian key={i}/>
        })}
    </>
  )
}
