"use client";
import React, { useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";
import { gql, request } from "graphql-request";
import { Skeleton } from "@/components/ui/skeleton";

const BusinessList = () => {
  const [workers, setWorkers] = useState(null);

  useEffect(() => {
    getAllWorkers();
  }, []);
  const getAllWorkers = async () => {
    const query = gql`
      query GetAllWorkersApi {
        workers {
          address
          categorie {
            title
            slug
          }
          image {
            url
          }
          name
          work
          id
        }
      }
    `;
    const res = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clzv1yknh05mn07uq64pttp22/master",
      query
    );
    console.log(res);
    setWorkers(res?.workers);
  };
  return (
    <>
      <div className="flex flex-col gap-5 mt-5">
        <h2 className="text-xl font-bold ">Bopular Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-12 md:gap-2">
          {workers == null
            ? Array.from({ length: 9 }).map((curr, index) => {
                return (
                  <Skeleton className="w-[346px] h-[508px] rounded-mdn bg-gray-200" />
                );
              })
            : workers?.map((curr, index) => {
                return (
                  <BusinessCard
                    id={curr?.id}
                    key={index}
                    name={curr?.name}
                    address={curr?.address}
                    title={curr?.categorie?.title}
                    slug={curr?.categorie?.slug}
                    work={curr?.work}
                    image={curr?.image?.url}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export default BusinessList;
