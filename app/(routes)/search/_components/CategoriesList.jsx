"use client";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { gql, request } from "graphql-request";
import { usePathname } from "next/navigation";

const CategoriesList = () => {
  const [workers, setWorkers] = useState(null);
  const slug = usePathname().split("/")[2];
  useEffect(() => {
    getWorkersWithSpecificCategory();
  }, []);

  const getWorkersWithSpecificCategory = async () => {
    const query =
      gql`
      query MyQuery {
        workers(where: { categorie: { slug: "` +
      slug +
      `" } }) {
          name
          id
          image {
            url
          }
          work
          address
          categorie {
      title
    }
        }
      }
    `;
    const res = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clzv1yknh05mn07uq64pttp22/master",
      query
    );
    console.log("workers are", res);
    setWorkers(res?.workers);
  };
  return (
    <>
      <div className="col-span-3 ">
        <h2 className="font-bold text-xl">
          {slug.charAt(0).toUpperCase() + slug.slice(1)}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-x-10">
          {workers?.map((curr, index) => {
            return (
              <CategoriesCard
                key={index}
                id={curr?.id}
                name={curr?.name}
                work={curr?.title}
                image={curr?.image?.url}
                address={curr?.address}
                category={curr?.categorie?.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoriesList;
