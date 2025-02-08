/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
// import reactElementToJSXString from "react-element-to-jsx-string";
import { Toaster } from "sonner";
import { ButtonsCard } from "@/components/buttons";

export function TailwindcssButtons() {
    return (
        <div className="pb-40 px-4 w-full">
            <Toaster position="top-center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
                {buttons.map((button, idx) => (
                <ButtonsCard key={idx}>
                    {button.component}
                </ButtonsCard>
                ))}
            </div>
        </div>
    );
}
export const buttons = [
  {
    name: "Next.js Blue",
    description: "Next.js Blue button for your website",
    component: (
      <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
        Next.js Blue
      </button>
    ),
  },
  {
    name: "Next.js White",
    description: "Next.js White button for your website",
    component: (
      <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
        Next White
      </button>
    ),
  },
];
