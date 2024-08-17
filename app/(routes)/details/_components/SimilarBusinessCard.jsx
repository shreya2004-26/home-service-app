"use client";
import Image from "next/image";
import React from "react";

const SimilarBusinessCard = ({ data }) => {
  return (
    <div className="flex gap-3 hover:border hover:border-primary p-3 rounded-lg ">
      <Image
        src={data?.image?.url}
        width={2000}
        height={200}
        className="w-[90px] h-[90px] rounded-md"
        alt={data?.name}
      />
      <div className="flex flex-col">
        <h2 className="text-[16px] font-extrabold">{data?.work}</h2>
        <h2 className="text-[14px] text-primary">{data?.name}</h2>
        <h2 className="text-[16px] text-gray-500">{data?.address}</h2>
      </div>
    </div>
  );
};

export default SimilarBusinessCard;
