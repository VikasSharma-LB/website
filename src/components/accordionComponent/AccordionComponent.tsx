"use client";

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionComponentProps {
  data: AccordionItem[];
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-white/10 bg-blue p-4 text-white transition-all"
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between text-left gap-4"
          >
            <h3 className="text-lg font-normal text-white w-5/6">{item.question}</h3>
            <div className="w-1/6 justify-end flex">
            <span className=" flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white ">
              {openIndex === index ? <RemoveIcon /> : <AddIcon />}
            </span>
            </div>
          </button>

          {openIndex === index && (
            <p className="mt-4 text-sm text-white/80 leading-relaxed ml-8">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
