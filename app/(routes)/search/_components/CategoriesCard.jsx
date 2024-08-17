import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesCard = ({ id, name, work, image, category, address }) => {
  return (
    <div className="flex flex-col gap-1 w-[300px] md:w-[250px] h-[380px] border shadow-md rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out ">
      <Image
        src={image}
        alt="img1"
        width={2000}
        height={200}
        className="md:w-[350px] rounded-xl"
      />
      <div className="flex flex-col gap-[6px] p-5">
        <h2 className="bg-purple-200 w-fit p-1 px-2 rounded-full text-xs text-primary">
          {category}
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

export default CategoriesCard;
