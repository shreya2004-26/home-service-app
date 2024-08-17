import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 border-b-[0px] px-4 shadow-sm">
      <Link href="/" className="flex gap-8 items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={2000}
          height={200}
          className="w-[180px]"
        />
        <Link
          href={"/my-booking"}
          className="mt-1 hover:text-primary hover:scale-105 text-gray-600"
        >
          Bookings
        </Link>
      </Link>

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
