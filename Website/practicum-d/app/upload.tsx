"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/upload";
import { TailwindcssButtons } from "./buttons";

export function FileUploadDemo() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
      <TailwindcssButtons></TailwindcssButtons>
    </div>
  );
}
