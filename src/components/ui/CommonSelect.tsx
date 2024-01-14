import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";
import LoadingComponent from "../Loading";
import { cn } from "@root/lib/utils";
const CommonSelect = ({
  name,
  children,
  placeholder,
  selectLabel,
  label,
  labelCss,
  dropDownData,
  selectTriggerHandler,
  onValueChange,
  value,
  isLoading,
  className,
  error,
}: any) => {
  return (
    <div className=" space-y-2 my-2">
      {label && (
        <label
          className={`text-f16 font-bold ${
            !!error ? "text-error" : ""
          }  pb-1 ${labelCss}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <Select onValueChange={onValueChange}>
        <SelectTrigger
          className={cn(
            `w-[248px] h-[56px] ${
              !!error
                ? "border-error"
                : "border-grayScale-primary dark:border-customGray-secondary"
            }`,
            className
          )}
        >
          <SelectValue className="text-f16 ">
            {dropDownData?.map((item: any) =>
              item?.value === value ? (
                <span className="font-medium">
                  {selectLabel && (
                    <span className="text-[#A0AEC0] font-normal">
                      {selectLabel}
                    </span>
                  )}{" "}
                  {item?.name}
                </span>
              ) : (
                <span className="text-customGray">{placeholder}</span>
              )
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {isLoading ? (
              <div>
                <LoadingComponent secondaryLoading />
              </div>
            ) : dropDownData ? (
              dropDownData?.map((item: any) => (
                <SelectItem
                  key={item?.value}
                  value={item?.value}
                  className="text-f16 font-normal"
                >
                  {item?.name}
                </SelectItem>
              ))
            ) : (
              <div>No Option Available</div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      {!!error && (
        <h3 className="text-f12 text-error max-w-[248px]">{error?.message}</h3>
      )}
    </div>
  );
};

export default CommonSelect;
