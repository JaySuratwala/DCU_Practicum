/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Toaster } from "sonner";
import { ButtonsCard } from "@/components/buttons"; // Ensure correct path

export function TailwindcssButtons() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form submitted successfully! ✅");
    };

    return (
        <div className="pb-40 px-4 w-full">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                {buttons.map((button, idx) => (
                    <ButtonsCard key={idx}>
                        {button.component}
                    </ButtonsCard>
                ))}
            </form>
        </div>
    );
}

export const buttons = [
  {
    name: "Submit Button",
    description: "Submit button for form submission",
    component: (
      <button
        type="submit" //  Important: This triggers form submission
        className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] "
      >
        Submit
      </button>
    ),
  },
];
