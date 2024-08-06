import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  name: string;
  role: string;
  availability: "available" | "unavailable" | "open";
  location: string;
  email: string;
  resume: string;
  image: string;
  currentCompany: { name: string; role: string; duration: string };
};

const AboutMe = ({
  name,
  role,
  availability,
  location,
  email,
  image,
  currentCompany,
}: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Globe size={32} />
          <h1 className="font-bold">{role}</h1>
        </div>
        <div>
          <h1
            className={`font-semibold text-sm px-2 py-1 rounded-full text-black flex gap-2 items-center justify-center ${
              availability == "available" ? "bg-green-400" : "bg-red-400"
            }`}
          >
            <span
              className={`w-2 h-2 mt-[2px] rounded-lg ${
                availability == "available" ? "bg-green-600" : "bg-red-600"
              }`}
            ></span>
            <p>
              {availability == "available"
                ? "open to opportunities"
                : "not open to opportunities"}
            </p>
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-3xl">Hello I&apos;m {name}</h1>
          <p className="text-sm">
            {role} based in {location}
          </p>
          <p className="text-sm">
            Currently {currentCompany.role} @ {currentCompany.name} for{" "}
            {currentCompany.duration} years
          </p>
        </div>
        <Image
          src={image}
          width={120}
          height={120}
          alt={name}
          className="rounded-md"
        />
      </div>
      <div>
        <Link href={`mailto:${email}`}>
          <Button></Button>
        </Link>
        <Link href={`resume`}>
          <Button></Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
