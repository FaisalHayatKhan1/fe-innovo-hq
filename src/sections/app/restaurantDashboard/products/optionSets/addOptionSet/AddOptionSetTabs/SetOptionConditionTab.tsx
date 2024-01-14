import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import React from "react";

const SetOptionConditionTab = ({ setValue }: any) => {
  return (
    <>
      <div className="space-y-4 pb-4 ">
        <div className="text-f14 font-medium">Required</div>
        <RHFSwitch name="is_required" />
        <div className="text-f14">
          If enabled, a customer must make a choice from this option set
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4 ">
        <div className="text-f14 font-medium">Select Multiple</div>
        <RHFSwitch name="is_multiple" />
        <div className="text-f14">
          If enabled, a customer can select multiple options
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-3 pb-3">
        <div className="flex justify-between items-center">
          <label htmlFor="min" className="text-f14 font-medium">
            Min Options Required
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          id="min"
          type="number"
          name="min"
        />
        <div className="text-f14">
          The minimum number of options that must be selected. Minimum is 1
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-3 pb-3">
        <div className="flex justify-between items-center">
          <label htmlFor="max" className="text-f14 font-medium">
            Max Options Allowed
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          id="max"
          type="number"
          name="max"
        />
        <div className="text-f14">
          The maximum number of options that can be selected. Leave empty for no
          limit
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
    </>
  );
};

export default SetOptionConditionTab;
