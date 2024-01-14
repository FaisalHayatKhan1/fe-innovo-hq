import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@root/lib/utils";
import React, { useEffect, useRef } from "react";
import { Label } from "@radix-ui/react-select";
import { Input } from "../ui/input";
export default function RHFSearchSelect({
  name,
  label,
  type,
  textInputCss,
  startEndadornment,
  className,
  outerDivStyle,
  selectedDropDownVal,
  defaultValue = { value: "" },
  endEndadornment,
  inputChangeHandler,
  listData,
  ref,
  labelCss,
  placeholder,
  ...other
}: any) {
  const { control, trigger } = useFormContext();
  const inputRef: any = useRef();
  const [focus, setFocus] = React.useState(false);
  const [dropDownVal, setDropDownVal] = React.useState(listData ?? []);
  const [fieldValue, setFieldValue] = React.useState<any>("");

  const listChangeHandler = (item: any) => {
    selectedDropDownVal(item);
    setFieldValue(item?.value);
    setFocus(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current?.contains(event.target)) {
        setFocus(false);
        const fieldExistsInList = listData?.some(
          (item: any) => item?.value === fieldValue
        );
        if (!fieldExistsInList) {
          setFieldValue(defaultValue?.value);
          setDropDownVal(listData);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [listData, defaultValue, fieldValue]);

  const valueChangeHandler = (event: any) => {
    inputChangeHandler(event?.target?.value);
    setFieldValue(event?.target?.value);
    const filteredData = listData?.filter((item: any) =>
      item?.name?.toLowerCase().includes(event?.target?.value?.toLowerCase())
    );
    setDropDownVal(filteredData);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div
          className={cn(`grid w-full  items-center gap-1.5 my-2 ${className}`)}
        >
          {label && (
            <Label
              className={cn(
                `text-f12 font-semibold ${
                  !!error ? "text-error" : "text-black"
                }  pb-1 ${labelCss}`
              )}
            >
              {label}
            </Label>
          )}
          <div ref={inputRef} className="relative">
            <div className={`${outerDivStyle}`}>
              <Input
                placeholder={placeholder}
                value={fieldValue}
                onFocus={() => setFocus(true)}
                className={cn(
                  `${
                    startEndadornment ? "pl-10" : "pl:2"
                  } border h-[43px] pr-10 border-customGray ring-transparent  rounded-[3px] focus-visible:ring-transparent shadow-[0 4px 50px 0 rgba(0, 0, 0, 0.1)] ${
                    !!error
                      ? "focus:border-error border-error"
                      : "focus:border-primary"
                  }   ${textInputCss}`
                )}
                type={type}
                onChange={valueChangeHandler}
                {...other}
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
            {focus && (
              <div className=" absolute w-full z-10">
                {dropDownVal.length > 0 ? (
                  <ul className="max-h-[250px] min-w-full overflow-y-auto max-w-md py-1 rounded-[5px] my-3 bg-white dark:bg-customGray-secondary ">
                    {dropDownVal &&
                      dropDownVal?.map((item: any) => (
                        <li
                          key={item.value}
                          value={item?.value}
                          className={` cursor-pointer hover:bg-primary hover:opacity-3 hover:text-white px-2 py-2  rounded-md`}
                          onClick={() => listChangeHandler(item)}
                        >
                          <h1 className="font-normal text-f14 ">
                            {item?.name}
                          </h1>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <div className="px-3 py-3 bg-white rounded-md text-primary my-3">
                    <p className="text-f12">No Data available</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    />
  );
}
