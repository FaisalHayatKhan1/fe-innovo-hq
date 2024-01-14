import React from "react";
import CommonSearchField from "./ui/CommonSearchField";
import { FilterIcon } from "@root/assets";
import { FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import Image from "next/image";
import CommonSelect from "./ui/CommonSelect";
import { RHFSelect } from "./hook-form";
const CommonTableHeader = ({ colfilter, ColFilterOptions }: any) => {
  const [showFilter, setShowFilter] = React.useState(false);
  const showCustomFilterOptions = () => {
    return (
      colfilter &&
      ColFilterOptions &&
      Array.isArray(ColFilterOptions) &&
      ColFilterOptions?.length > 0
    );
  };

  return (
    <div className="container">
      <div className="flex items-center space-x-8">
        <CommonSearchField
          name="search"
          placeholder="Search by name, email, or others..."
          startEndadornment={
            <div>
              <FiSearch className="w-[22px] h-[22px]" />
            </div>
          }
        />
        <Button
          type="button"
          variant="default"
          className={`w-[112px] h-[56px] ${
            showFilter ? "text-primary" : "text-customGray"
          }  space-x-2 hover:bg-primary hover:text-white bg-theme-lightSecondary dark:bg-theme-darkSecondary`}
          onClick={() => setShowFilter(!showFilter)}
        >
          <Image src={FilterIcon} alt="" />
          <span className="text-16 ">Filters</span>
        </Button>
      </div>
      <div className="grid grid-cols-4 space-r-4">
        {showCustomFilterOptions() &&
          showFilter &&
          ColFilterOptions?.map((data: any, index: number) => {
            return (
              data?.type === "select" && (
                <div key={index} className="col-span-1">
                  <CommonSelect
                    value={data?.defaultValue}
                    name={data?.name}
                    label={data?.label}
                    placeholder={data?.placeholder ?? ""}
                    onValueChange={data?.onChange}
                    dropDownData={data?.Options}
                  />
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default CommonTableHeader;
