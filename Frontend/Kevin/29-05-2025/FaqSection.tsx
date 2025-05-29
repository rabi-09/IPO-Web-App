import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import React from "react";
  
  export default function FaqSection(): JSX.Element {
    // FAQ data for mapping
    const faqItems = [
      {
        question: "How to Subscribe to an IPO?",
        answer: (
          <>
            Step 1: Login to your respective service provider.
            <br />
            Step 2: Click on the IPO button.
            <br />
            Step 3: Select the IPO you want to bid and enter the relevant details.
            <br />
            Step4: Your subscription will be completed once you make the payment
            or give permission.
          </>
        ),
        defaultOpen: true,
      },
      {
        question: "Should I buy an IPO first day?",
        answer: "",
      },
      {
        question: "How do you know if an IPO is good?",
        answer: "",
      },
      {
        question: "How to check IPO start date?",
        answer: "",
      },
      {
        question: "What is issue size?",
        answer: "",
      },
      {
        question: "How many shares in a lot?",
        answer: "",
      },
      {
        question: "How is the lot size calculated?",
        answer: "",
      },
      {
        question: "Who decides the IPO price band?",
        answer: "",
      },
      {
        question: "What is IPO GMP?",
        answer: "",
      },
      {
        question: "How many lots should I apply for IPO?",
        answer: "",
      },
    ];
  
    return (
      <section className="w-full py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-medium font-['Poppins-Medium',Helvetica] mb-4">
            Frequently Asked Questions?
          </h2>
          <p className="text-2xl font-normal font-['Poppins-Regular',Helvetica] mb-10">
            Find answers to common questions that come in your mind related to
            IPO.
          </p>
  
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4 bg-white rounded-md border border-gray-200 overflow-hidden"
              >
                <AccordionTrigger className="px-16 py-10 text-3xl font-semibold font-['Poppins-SemiBold',Helvetica] text-black hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-16 py-6 text-2xl font-semibold font-['Poppins-SemiBold',Helvetica]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }
  