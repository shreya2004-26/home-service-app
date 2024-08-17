"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CategoryDescription = ({ id, title, slug, image }) => {
  const path = usePathname().split("/")[2];
  return (
    <Link
      href={`/search/${slug}`}
      className={`flex gap-2 border p-3 items-center rounded-xl hover:border-primary hover:bg-purple-50 ${
        slug == path ? "bg-purple-100 border-primary" : ""
      }`}
    >
      <Image src={image} width={2000} height={200} className="w-[35px]" />
      <h2>{title}</h2>
    </Link>
  );
};

export default CategoryDescription;
