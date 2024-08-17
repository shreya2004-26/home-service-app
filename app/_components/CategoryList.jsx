"use client";
import React, { useEffect, useState } from "react";
import { gql, request } from "graphql-request";
import CategoryCard from "./CategoryCard";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryList = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getAllCategories();
  }, []);
  const getAllCategories = async () => {
    const query = gql`
      query GetAllCategoriesApi {
        categories {
          id
          icon {
            url
          }
          slug
          title
        }
      }
    `;
    const res = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clzv1yknh05mn07uq64pttp22/master",
      query
    );
    console.log(res);
    setCategories(res?.categories);
  };
  return (
    <div className=" grid grid-cols-2 md:flex md:justify-center gap-4 text-center mt-8">
      {categories == null
        ? Array.from({ length: 6 }).map((curr, index) => {
            return (
              <Skeleton className="w-[167px] h-[126px] rounded-md bg-gray-200" />
            );
          })
        : categories?.map((curr, index) => {
            return (
              <CategoryCard
                key={index}
                id={curr?.id}
                image={curr?.icon?.url}
                slug={curr?.slug}
                title={curr?.title}
              />
            );
          })}
    </div>
  );
};

export default CategoryList;
