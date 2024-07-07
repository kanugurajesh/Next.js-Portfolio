import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const ItemCart = ({ children, image, title, description, tags, href }: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {children}
    </div>
  );
};
