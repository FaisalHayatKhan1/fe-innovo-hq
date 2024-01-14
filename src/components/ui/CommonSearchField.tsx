import { cn } from "@root/lib/utils";
import React from "react";

const CommonSearchField = ({
  label,
  labelCss,
  name,
  error,
  outerDivStyle,
  startEndadornment,
  endEndadornment,
  placeholder,
  textInputCss,
  value,
  onChange,
  type,
}: any) => {
  return (
    <div className="grid w-full items-center gap-1.5 my-2">
      {label && (
        <label
          className={`text-f14 font-medium ${
            !!error ? "text-error" : ""
          } pb-1 ${labelCss}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className={cn(`relative ${outerDivStyle}`)}>
        <input
          className={cn(
            `${
              startEndadornment ? "pl-[50px]" : "pl:2"
            } border bg-transparent text-f16 rounded-[10px] min-w-full focus-visible:outline-none py-[16px] pr-[20px] font-normal ${
              !!error
                ? "focus:border-error border-error"
                : "focus:border-primary border-grayScale-primary dark:border-customGray-secondary"
            } ${textInputCss}`
          )}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
        />
        {startEndadornment && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {startEndadornment}
          </div>
        )}
        {endEndadornment && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {endEndadornment}
          </div>
        )}
      </div>
      {!!error && (
        <h3 className="text-f12 text-error max-w-[385px]">{error?.message}</h3>
      )}
    </div>
  );
};

export default CommonSearchField;
