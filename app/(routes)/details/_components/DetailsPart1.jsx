"use client";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Upload, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gql, request } from "graphql-request";
import React, { useEffect, useState } from "react";
import DetailsPart2 from "./DetailsPart2";

const DetailsPart1 = () => {
  const [worker, setWorker] = useState(null);
  const id = usePathname().split("/")[2];

  useEffect(() => {
    getWorkerDetails();
  }, []);

  const getWorkerDetails = async () => {
    const query =
      gql`
      query GetWorkerDetailApi {
        worker(where: { id: "` +
      id +
      `" }) {
          address
          categorie {
            slug
            title
          }
          description
          email
          gallery {
            url
          }
          name
          work
          id
          image {
            url
          }
        }
      }
    `;
    const res = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clzv1yknh05mn07uq64pttp22/master",
      query
    );
    setWorker(res?.worker);
  };
  return (
    <>
      <div className=" mt-4 md:mt-0 flex flex-col md:flex-row md:justify-between items-center">
        <div className=" flex flex-col md:flex md:flex-row gap-6 items-center">
          {/* {console.log("55", worker?.image?.url)} */}
          <Image
            src={worker?.image?.url}
            width="150"
            height="200"
            className="h-[150px] rounded-full object-cover"
            alt={worker?.name}
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-primary bg-purple-100 p-2 w-fit rounded-full text-[16px]">
              {worker?.categorie?.title}
            </h2>
            <h2 className="text-4xl font-extrabold ">{worker?.work}</h2>
            <h2 className=" flex gap-2 text-gray-500 text-lg">
              <MapPin /> {worker?.address}
            </h2>
            <h2 className="flex gap-2 text-gray-500 text-lg">
              <Mail /> {worker?.email}
            </h2>
          </div>
        </div>
        <div className="p-3 md:p-0 flex flex-col gap-4 items-start md:items-end">
          <Button>
            <Upload />
          </Button>
          <h2 className="flex gap-2 text-primary text-lg">
            <User /> {worker?.name}
          </h2>
          <h2 className=" flex gap-2 text-xl text-gray-500">
            <Clock /> Available 8:00 AM to 10:00 PM{" "}
          </h2>
        </div>
      </div>
      {/* <DetailsPart2 worker={worker} /> */}
    </>
  );
};

export default DetailsPart1;
