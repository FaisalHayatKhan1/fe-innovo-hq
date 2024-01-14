import React from "react";
import { Button } from "@root/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@root/components/CommonTabs";
const TimeFormatting = ({ setValue }: any) => {
  return (
    <div className="space-y-4 pb-4">
      <div>
        <label htmlFor="map_tab" className="text-f14 font-medium">
          Time Formatting
        </label>
      </div>
      <div>
        <Tabs
          id="map_tab"
          defaultValue="12"
          onValueChange={(val) => {
            setValue("time_format", val);
          }}
        >
          <TabsList>
            <TabsTrigger value="12"> 12 Hour (9:00pm)</TabsTrigger>
            <TabsTrigger value="24">24 Hour (21:00)</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        <label className="text-f14">
          Used to accurately calculate store timings
        </label>
      </div>
      <div>
        <hr className=" border-dashed border-customGray" />
      </div>
    </div>
  );
};

export default TimeFormatting;
