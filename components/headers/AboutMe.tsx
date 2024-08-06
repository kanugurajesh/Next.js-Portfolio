import React from "react";
import Image from "next/image";
import { Globe, Mail, File } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  name: string;
  role: string;
  // availability: "available" | "unavailable";
  availability: string;
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
    <div
      className="flex flex-col gap-8 max-w-lg w-full pl-5 pr-2 py-5"
      id="home"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Globe size={32} />
          <h1 className="font-bold">{role}</h1>
        </div>
        <div className="cursor-pointer">
          <h1
            className={`font-semibold text-sm px-2 py-1 rounded-full text-black flex gap-2 items-center justify-center transition-all ease-in-out duration-300 ${
              availability == "available"
                ? "bg-green-400 border-2 border-green-400 hover:bg-white hover:text-green-400"
                : "bg-red-400 border-2 border-red-400 hover:bg-white hover:text-red-400"
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
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl">Hello I&apos;m {name}</h1>
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
          width={130}
          height={130}
          alt={name}
          className="rounded-md"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Link href={`mailto:${email}`}>
          <Button className="flex gap-2" variant={"outline"}>
            <Mail />
            <p>Email</p>
          </Button>
        </Link>
        <Link href={`resume`}>
          <Button className="flex gap-2" variant={"outline"}>
            <File />
            <p>Resume</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
