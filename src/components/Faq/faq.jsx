// eslint-disable-next-line no-unused-vars
import React from "react";
// import { useState } from "react";
import "./faq.css";
import Accordion from "../AccordionComponent/Accordion";

function Faq() {
  // const [isActive, setIsActive] = useState(false);
  return (
    // faq header
    <div className="faqs">
      <div className="faqs__header">
        <p className="faqs__text">frequently asked questions?</p>
        <h2 className="faqs__h2">We can help!</h2>
      </div>
      {/* ACCORDIONS  */}
      <div className="accordion__header">
        <Accordion />
      </div>
    </div>
  );
}

export default Faq;
