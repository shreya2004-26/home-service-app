"use client";
import { Skeleton } from "@/components/ui/skeleton";
import CategoryDescription from "./CategoryDescription";
import { gql, request } from "graphql-request";
// import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const CategoriesContainer = () => {
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
    <>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg text-primary">Categories</h2>
        <div className=" w-[300px] md:flex md:flex-col gap-5 md:w-[90%]">
          {/* {adding scroll bar} */}

          <ScrollArea className="md:hidden w-[300px] whitespace-nowrap rounded-lg border">
            <div className="flex w-max space-x-4 p-4">
              {categories == null
                ? Array.from({ length: 6 }).map((curr, index) => {
                    return (
                      <Skeleton className="w-[296px] h-[60px] rounded-lg bg-gray-200" />
                    );
                  })
                : categories?.map((curr, index) => {
                    return (
                      <CategoryDescription
                        key={index}
                        slug={curr?.slug}
                        title={curr?.title}
                        image={curr?.icon?.url}
                        id={curr?.id}
                      />
                    );
                  })}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* {scrollbar till here} */}

          <div className="hidden md:flex flex-col gap-5">
            {/* Medium and larger screens: Vertical stack */}
            {categories == null
              ? Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-full h-[60px] rounded-lg bg-gray-200"
                  />
                ))
              : categories?.map((curr) => (
                  <CategoryDescription
                    key={curr?.id}
                    slug={curr?.slug}
                    title={curr?.title}
                    image={curr?.icon?.url}
                    id={curr?.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesContainer;
