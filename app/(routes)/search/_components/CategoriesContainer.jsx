"use client";
import CategoryDescription from "./CategoryDescription";
import { gql, request } from "graphql-request";
// import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        <div className="flex flex-col gap-5 w-[90%]">
          {categories?.map((curr, index) => {
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
      </div>
    </>
  );
};

export default CategoriesContainer;
