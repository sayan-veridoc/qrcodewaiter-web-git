"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function CardButton({ children }: Props) {
  const router = useRouter();

  return (
    <button
      className="bg-gray-100 w-80 p-8 text-center rounded-lg border-dashed border-2 border-gray-500 hover:border-[#E01D35] transition duration-300 transform hover:shadow-md"
      id="dropzone"
      onClick={() => {
        router.push("/dashboard/products/category/addCategory");
      }}
      type="button"
    >
      <div className="cursor-pointer flex flex-col items-center space-y-2">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>

        <span className="text-gray-500 ">{children}</span>
      </div>
    </button>
  );
}
