import { useFormContext, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";
import LoadingComponent from "../Loading";
import React from "react";
import { cn } from "@root/lib/utils";

export default function RHFSelect({
  name,
  children,
  placeholder,
  className,
  label,
  labelCss,
  dropDownData,
  selectTriggerHandler,
  styleDropdown,
  isLoading,
  ...other
}: any) {
  const { control } = useFormContext();
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="grid w-full  items-center gap-1.5 my-2">
          {label && (
            <label
              className={`text-f14 font-medium ${
                !!error ? "text-error" : ""
              }  pb-1 ${labelCss}`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <Select
            onValueChange={(selectedValue) => {
              setSelectedValue(selectedValue); // Store the selected value in the field
              field.onChange(selectedValue);
            }}
            {...field}
            {...other}
            error={!!error}
          >
            <SelectTrigger
              className={cn(
                `w-[385px] ${!!error ? "border-error" : "border-customGray"}`,
                className
              )}
            >
              <SelectValue className="text-f12 font-normal">
                {dropDownData?.map((item: any, index: number) =>
                  item?.value === selectedValue ? (
                    <span>{item?.name}</span>
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
                  dropDownData?.map((item: any, index: number) => (
                    <SelectItem
                      key={index}
                      value={item?.value}
                      className={styleDropdown}
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
            <h3 className="text-f12 text-error max-w-[385px]">
              {error?.message}
            </h3>
          )}
        </div>
      )}
    />
  );
}
