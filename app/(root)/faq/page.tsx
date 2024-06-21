"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState<IFaqItem[] | null>(null);

  const getFaqData = () => {
    axios
      .get("https://d4cf4593d5120234.mokky.dev/faq")
      .then((res) => setFaq(res.data));
  };

  useEffect(() => {
    getFaqData()
  }, [])

  return (
    <div className="w-2/3 mx-auto pt-20 pb-[144px]">
      {faq ? <Accordion type="single" collapsible>
        {faq?.map((item: IFaqItem) => (
            <AccordionItem value={`item-${item.id}`} className="border-0">
            <AccordionTrigger className="font-font-family font-medium text-xl tracking-[0.01em] text-[#09080d] hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="font-font-family font-normal text-[16px] text-[#5e5d65] tracking-[0.01em]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>: "not data"}
    </div>
  );
};

export default Faq;
