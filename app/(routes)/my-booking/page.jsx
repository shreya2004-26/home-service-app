"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingCard from "./_components/BookingCard";
import { useUser } from "@clerk/nextjs";
import { gql, request } from "graphql-request";
import moment from "moment";
import { Skeleton } from "@/components/ui/skeleton";

const page = () => {
  const [bookings, setBookings] = useState(null);
  const [tabValue, setTabvalue] = useState("booked");
  const { user } = useUser();

  useEffect(() => {
    user && getAllBookings();
  }, [user]);
  useEffect(() => {
    user && getAllBookings();
  }, [tabValue]);

  const getAllBookings = async () => {
    console.log(user?.id);
    const query =
      gql`
      query GetAllBookings {
        bookings(where: { userId: "` +
      user?.id +
      `" }) {
          id
          date
          time
          worker {
            address
            image {
              url
            }
            name
            work
          }
        }
      }
    `;
    const res = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clzv1yknh05mn07uq64pttp22/master",
      query
    );
    console.log("All bookings", res);
    const totalBookings = res?.bookings;
    if (tabValue === "booked") {
      setBookings(
        totalBookings?.filter((curr) => moment(curr?.date) >= new Date())
      );
    } else {
      setBookings(
        totalBookings?.filter((curr) => moment(curr?.date) < new Date())
      );
    }
  };

  return (
    <>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-[100%]">
          <TabsTrigger
            value="booked"
            onClick={() => {
              setTabvalue("booked");
            }}
          >
            Booked
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            onClick={() => {
              setTabvalue("completed");
            }}
          >
            Completed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          {bookings == null ? (
            Array.from({ length: 8 }).map((curr, index) => {
              return (
                <Skeleton className="w-[1376px] h-[185px] rounded-lg bg-gray-200 mt-8" />
              );
            })
          ) : bookings.length == 0 ? (
            <h2 className="mt-8 text-lg text-gray-600">
              No bookings available!
            </h2>
          ) : (
            bookings?.map((curr, index) => {
              return (
                <BookingCard
                  key={index}
                  name={curr?.worker?.name}
                  work={curr?.worker?.work}
                  image={curr?.worker?.image?.url}
                  address={curr?.worker?.address}
                  date={curr?.date}
                  time={curr?.time}
                />
              );
            })
          )}
        </TabsContent>
        <TabsContent value="completed">
          <div className="flex flex-col">
            {bookings?.map((curr, index) => {
              return (
                <BookingCard
                  key={index}
                  name={curr?.worker?.name}
                  work={curr?.worker?.work}
                  image={curr?.worker?.image?.url}
                  address={curr?.worker?.address}
                  date={curr?.date}
                  time={curr?.time}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default page;
