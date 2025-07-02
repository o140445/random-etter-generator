"use client"

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className=" rounded-lg bg-white dark:bg-gray-800">
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left 
            font-semibold text-gray-900 dark:text-white focus:outline-none"
            onClick={() => toggle(idx)}
            aria-expanded={openIndexes.includes(idx)}
            aria-controls={`faq-panel-${idx}`}
          >
            <span>{item.question}</span>
            <span className="ml-2 text-xl">{openIndexes.includes(idx) ? '−' : '+'}</span>
          </button>
          {openIndexes.includes(idx) && (
            <div
              id={`faq-panel-${idx}`}
              className="px-4 pb-4 text-gray-700 dark:text-gray-300 "
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 