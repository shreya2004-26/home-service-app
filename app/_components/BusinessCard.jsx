import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessCard = ({ id, name, address, title, slug, work, image }) => {
  return (
    <div className="flex flex-col gap-1 md:w-[330px] h-[390p] border shadow-md rounded-xl cursor-pointer hover:scale-105 mb-10  transition-all ease-in-out">
      <Image
        src={image}
        width={2000}
        height={200}
        className="md:w-[350px] rounded-xl"
        alt="img"
      />
      <div className="flex flex-col gap-[6px] p-5">
        <h2 className="bg-purple-200 w-fit p-1 px-2 rounded-full text-xs text-primary">
          {title}
        </h2>
        <h2 className="text-lg font-bold">{work}</h2>
        <h2 className="text-primary text-sm">{name}</h2>
        <h2 className="text-sm text-gray-500">{address}</h2>
        <Link href={`/details/${id}`}>
          <Button className="w-fit mt-3 rounded-md">Book Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
