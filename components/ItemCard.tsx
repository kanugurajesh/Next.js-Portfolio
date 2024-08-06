import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Declaring the props to use it in the ItemCard component
type Props = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  downborder?: boolean;
};

const ItemCard = ({
  image,
  title,
  description,
  tags,
  href,
  downborder,
}: Props) => {
  return (
    <Link
      className="flex justify-between w-full items-center gap-2 pr-4"
      href={href}
    >
      <div
        className={`flex items-center gap-2 ${
          downborder && "py-4 border-b border-primary-background"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={image} alt={title} width={120} height={120} />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <span className="flex">
            <h3>
              <span className="text-lg font-bold">{title}- </span>
              {description}
            </h3>
          </span>
          <div className="flex justify-start items-center">
            <span className="flex justify-center items-center gap-1">
              {tags.map((tag, index) => (
                <Badge
                  key={tag + index}
                  className="text-xs font-bold bg-primary-background text-primary"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </span>
          </div>
        </div>
      </div>
      <Link
        href={href}
        className="p-2 hover:bg-black hover:text-white rounded-full transition-all ease-in-out duration-300"
      >
        <ChevronRight size={24} />
      </Link>
    </Link>
  );
};

export { ItemCard };
