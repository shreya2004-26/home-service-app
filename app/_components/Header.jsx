import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex gap-6 md:justify-between items-center py-5 border-b-[0px] px-4 shadow-sm">
      <div className="flex gap-4 md:gap-8 items-center">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={2000}
            height={200}
            className="w-[180px]"
          />
        </Link>
        <Link href={"/my-booking"}>
          <h2 className="mt-1 hover:text-primary hover:scale-105 text-gray-600">
            Bookings
          </h2>
        </Link>
      </div>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignedOut>
        <Button>
          <SignInButton />
        </Button>
      </SignedOut>
    </div>
  );
};

export default Header;
