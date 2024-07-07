import React from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const ItemCard = ({
  image,
  title,
  description,
  tags,
  href,
}: Props) => {
  return (
    <Link className="flex justify-between w-full items-center h-full bg-red-500" href={href}>
      <div className="flex flex-col items-center h-full">
        <Image src={image} alt={title} width={80} height={80} className="rounded-lg w-full" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <span className="flex items-center">
          <h3 className="text-lg font-semibold">{title}-</h3>
          <span>{description}</span>
        </span>
        <div className="flex justify-start items-center">
          <span className="flex justify-center items-center gap-1">
            {tags.map((tag, index) => (
              <Badge
                key={tag + index}
                className="text-xs font-semibold bg-primary-background text-primary"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
};

export { ItemCard };