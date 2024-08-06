import React from "react";
import {
  House,
  Folder,
  Briefcase,
  GraduationCap,
  Mail,
  DiamondPlus,
} from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

export const Navbar = ({}: Props) => {
  return (
    <div
      className="w-full h-full flex justify-between items-center max-w-lg bg-primary-foreground px-4 py-2 
    rounded-xl border m-4 shadow-lg"
    >
      <div className="flex justify-center items-center gap-4">
        <Link href="#home">
          <Button variant="ghost" size="icon" className="group">
            <House />
          </Button>
        </Link>
        <Link href="#projects">
          <Button variant="ghost" size="icon" className="group">
            <Folder />
          </Button>
        </Link>
        <Link href="#experience">
          <Button variant="ghost" size="icon" className="group">
            <Briefcase />
          </Button>
        </Link>
        <Link href="#education">
          <Button variant="ghost" size="icon" className="group">
            <GraduationCap />
          </Button>
        </Link>
        <Link href={`mailto:kanugurajesh3@gmail.com`}>
          <Button variant="ghost" size="icon" className="group">
            <Mail />
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <ModeToggle />
        <Button
          className="flex justify-center items-center gap-2"
          variant="outline"
        >
          <DiamondPlus className="text-primary" />
          <span className="font-bold">Hire Me</span>
        </Button>
      </div>
    </div>
  );
};
