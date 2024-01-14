import React from "react";
import { cn } from "@root/lib/utils";
import { Button } from "./button";
const BadgeButton = ({
  badgeName,
  children,
  badgeClassName,
  className,
  ...props
}: any) => {
  return (
    <Button className={cn("relative w-fit h-fit", className)} {...props}>
      <div
        className={cn(
          `${
            badgeName
              ? "w-[15px] h-[15px] p-2 flex justify-center items-center top-[-7px] right-[-7px]"
              : "w-[8px] h-[8px] top-[-0px] right-[-2px]"
          } text-[10px]   rounded-full absolute bg-error text-white `,
          badgeClassName
        )}
      >
        {badgeName}
      </div>
      {children}
    </Button>
  );
};

export default BadgeButton;
