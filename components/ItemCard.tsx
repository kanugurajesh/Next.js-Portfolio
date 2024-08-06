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
      className="flex justify-between w-full items-center gap-3 pr-3"
      href={href}
    >
      <div
        className={`flex items-center gap-4 ${
          downborder ? "py-4 border-b border-primary-background" : "py-4"
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <Image src={image} alt={title} width={75} height={75} className="object-cover" />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <span className="flex">
            <p className="text-sm">
              <span className="text-base font-bold">{title} - </span>
              {description}
            </p>
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
      <div className="p-2 hover:bg-black hover:text-white rounded-full transition-all ease-in-out duration-300">
        <ChevronRight size={24} />
      </div>
    </Link>
  );
};

export { ItemCard };
