"use client";
import React from "react";
import { IconClipboard } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const SubmitButton = ({
  children,
  className,
  onSubmit,
}: {
  children?: React.ReactNode;
  className?: string;
  onSubmit?: () => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (onSubmit) onSubmit(); // Call the provided submit function
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className={cn(
          "h-60 w-full bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
          className
        )}
      >
        <div className="absolute inset-0 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]" />
        <IconClipboard className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
        <div className="relative z-40">{children || "Submit"}</div>
      </button>
    </form>
  );
};
