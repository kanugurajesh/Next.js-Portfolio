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

type Props = {};

export const Navbar = ({}: Props) => {
  return (
    <div className="w-full h-full flex justify-between items-center max-w-lg bg-zinc-900 bg-primary px-8 py-4 ">
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-white text-2xl">Navbar</h1>
        <House className="text-primary-foreground" />
        <Folder className="text-primary-foreground" />
        <Briefcase className="text-primary-foreground" />
        <GraduationCap className="text-primary-foreground" />
        <Mail className="text-primary-foreground" />  
      </div>
      <div className="flex justify-center items-center gap-4">
        <ModeToggle />
        <DiamondPlus className="text-primary-foreground" />
      </div>
    </div>
  );
};
