import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const Section = ({ title, icon, children }: Props) => {
  return (
    <div id={title.toLowerCase()} className="w-full h-full max-w-lg flex flex-col justify-start items-start bg-secondary rounded-md">
      <span className="flex justify-center items-center gap-1 m-2 p-2 text-lg font-semibold">
        {icon}
        <h2>{title}</h2>
      </span>
      <div className="m-2 flex flex-col items-center gap-2 w-full h-full p-2">
        {children}
      </div>
    </div>
  );
};
