/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Toaster } from "sonner";
import { SubmitButton } from "@/components/buttons"; // Import SubmitButton

export function TailwindcssButtons() {
    return (
        <div className="pb-40 px-4 w-full">
            <Toaster position="top-center" />
            <form onSubmit={(e) => { 
                e.preventDefault();
                alert("Form submitted successfully! ✅"); 
            }}>
                {buttons.map((button, idx) => (
                    <SubmitButton key={idx}>
                        {button.component}
                    </SubmitButton>
                ))}
            </form>
        </div>
    );
}

export const buttons = [
  {
    name: "Submit Button",
    description: "Form submit button with Next.js styling",
    component: (
      <SubmitButton className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
        Submit
      </SubmitButton>
    ),
  },
];
