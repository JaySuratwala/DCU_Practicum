/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={cn(className)}>
      <div className="relative z-40">{children}</div>
    </div>
  );
};
