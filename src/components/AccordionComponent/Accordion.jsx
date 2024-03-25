// eslint-disable-next-line no-unused-vars
import React from "react";
import data from "./AccordionData";
import { useState} from "react";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import './accordion.css';

function Accordion() {
 

//   const handleItemClick = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };


  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
        {data?.map(({ question, answer, id }) => {
            return (
              <div key={id} className=''>
                <div className='accordion__content'>
                  <span className='accordion__question'>
                    {question}
                  </span>
                  <span onClick={() => handleAccordion(id)}>
                    <span>
                      <BsChevronDown
                        size={12}
                        className={` ${
                          activeIndex === id ? 'hidden' : 'block'
                        }`}
                      />
                    </span>
                    <span>
                      <BsChevronUp
                        size={12}
                        className={` ${
                          activeIndex === id ? 'block' : 'hidden'
                        }`}
                      />
                    </span>
                  </span>
                </div>
                <div className='accoridion__answer mt-10'>
                  <p className={` ${activeIndex === id ? 'block' : 'hidden'}`}>
                    <span>{answer}</span>
                  </p>
                </div>
              </div>
            );
          })}
    </>
  );
}
export default Accordion;
