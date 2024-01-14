import { Tabs, TabsList, TabsTrigger } from "@root/components/CommonTabs";
import SearchSelectField from "@root/components/SearchSelect";
import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SetOptionGeneralTab = ({ setValue }: any) => {
  //   const comboPriceType = register("comboPriceType");
  const tabChangeHandler = (val: string) => {
    setValue("option_type", val);
  };
  return (
    <>
      <div className="space-y-3 pb-3">
        <label className="text-f14 font-medium">Option Set Type</label>
        <Tabs defaultValue="Standard" onValueChange={tabChangeHandler}>
          <TabsList className="p-0">
            <TabsTrigger value="Standard"> Standard</TabsTrigger>
            <TabsTrigger value="Pizza">Pizza</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="text-f14">
          A Pizza option set allows the use of a point system to set limits to
          item add-ons. More info in (LINK HERE).
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-3 pb-3">
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          label="Name"
          type="text"
          name="name"
        />
        <div className="text-f14">A unique name for your option set</div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-3 pb-3">
        <div className="flex justify-between items-center">
          <label htmlFor="displayName" className="text-f14 font-medium">
            Display Name
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          id="displayName"
          type="text"
          name="displayName"
        />
        <div className="text-f14">
          Will override the unique name in your store
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4 ">
        <div className="text-f14 font-medium">Show In Menu </div>
        <RHFSwitch name="show_in_menu" />
        <div className="text-f14">
          If enabled, the option set will display itself your on your menu list.
          If disabled, it will only show in the item popup
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
    </>
  );
};

export default SetOptionGeneralTab;
