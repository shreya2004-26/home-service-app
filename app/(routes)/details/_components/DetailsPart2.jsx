"use client";
import { Button } from "@/components/ui/button";
import { NotebookIcon, NotebookPen } from "lucide-react";
import Image from "next/image";
import { gql, request } from "graphql-request";
import React, { useEffect, useState } from "react";
import SimilarBusinessCard from "./SimilarBusinessCard";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Calender from "./Calender";
import TimeSlot from "./TimeSlot";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const DetailsPart2 = () => {
  const [worker, setWorker] = useState(null);
  const [workers, setWorkers] = useState(null);
  const [booking, setBooking] = useState(null);
  const id = usePathname().split("/")[2];
  const [date, setDate] = useState(new Date());
  const [timeslot, setTimeslot] = useState("");
  const { user } = useUser();
  console.log("user is", user);
  useEffect(() => {
    getWorkerDetails();
  }, []);

  useEffect(() => {
    worker && getAllSuggestionLists();
  }, [worker]);

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
    console.log("worker detail", res);
    setWorker(res?.worker); //use State will not change state immediately
  };

  const getAllSuggestionLists = async () => {
    const query =
      gql`
      query SuggestionList {
  workers(
    where: {id_not_contains: "` +
      id +
      `", AND: {categorie: {slug_contains: "` +
      worker?.categorie?.slug +
      `"}}}
  ) {
    name
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
    console.log(res);
    console.log("40", res?.workers);
    setWorkers(res?.workers);
  };

  const createBooking = async () => {
    const query =
      gql`
      mutation MyMutation {
        createBooking(
          data: {
            userId: "` +
      user?.id +
      `"
            date: "` +
      date +
      `"
            time: "` +
      timeslot +
      `"
            worker: { connect: { id: "` +
      id +
      `" } }
          }
        ) {
          id
          worker {
      address
      name
      image {
        url
      }
      work
    }
    time
    date
    
        }
    publishManyBookings(to: PUBLISHED) {
    count
  }
      }
    `;
    const res = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clzv1yknh05mn07uq64pttp22/master",
      query
    );
    console.log("Booking", res);
    setBooking(res?.booking);
    setDate("");
    setTimeslot("");
    toast("Booking successfully created!.");
  };

  return (
    <div className="grid grid-cols-3 gap-10 mt-14">
      <div className="col-span-3 md:col-span-2">
        <div className="flex flex-col gap-5">
          <h2 className="text-[24px] font-extrabold">Description</h2>
          <h2 className="text-[16px] leading-7 text-gray-700">
            {worker?.description}
          </h2>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <h2 className="text-[24px] font-extrabold"> Gallery</h2>
          <div className="grid grid-cols-1 md:flex md:flex-row gap-4 rounded-md">
            {workers == null
              ? Array.from({ length: 3 }).map((curr, index) => {
                  return (
                    <Skeleton className="w-[160px] h-[106px] rounded-lg bg-gray-200" />
                  );
                })
              : worker?.gallery?.map((curr, index) => {
                  {
                    console.log(curr?.url);
                  }
                  return (
                    <Image
                      index={index}
                      src={curr?.url}
                      width={2000}
                      height={200}
                      className="w-[300px] md:w-[160px] rounded-lg"
                      alt="default.jpg"
                    />
                  );
                })}
          </div>
        </div>
      </div>
      <div className="w-[300px] flex flex-col gap-1 mb-5">
        <Sheet>
          <SheetTrigger className="flex gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-center w-[300px] md:w-fit h-10 px-16 md:px-4 py-2 rounded-md">
            <NotebookPen /> Book Appointment
          </SheetTrigger>

          <SheetContent>
            <ScrollArea className=" w-full border-none rounded-md border p-4 h-full">
              <SheetHeader>
                <SheetTitle className="font-bold text-xl">
                  Book a Service
                </SheetTitle>
                <SheetDescription>
                  <h2>Select Date and Time slot to book an service</h2>
                  <Calender date={date} setDate={setDate} />
                  <TimeSlot timeslot={timeslot} setTimeslot={setTimeslot} />
                </SheetDescription>
                <div className="flex ml-36 gap-2 pt-2">
                  <Button className="bg-red-500">Cancel</Button>
                  <Button onClick={() => createBooking()}>Book</Button>
                </div>
              </SheetHeader>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <h2 className="text-[18px] font-extrabold mt-4">Similar Business</h2>
        {workers == null
          ? Array.from({ length: 8 }).map((curr, index) => {
              return (
                <Skeleton className="w-[346px] h-[118px] rounded-lg bg-gray-200" />
              );
            })
          : workers?.map((curr, index) => {
              return <SimilarBusinessCard key={index} data={curr} />;
            })}
      </div>
    </div>
  );
};

export default DetailsPart2;
