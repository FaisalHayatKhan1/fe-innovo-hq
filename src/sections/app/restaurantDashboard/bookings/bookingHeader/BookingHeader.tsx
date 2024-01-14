import React from "react";
import CommonSelect from "@root/components/ui/CommonSelect";
import { Button } from "@root/components/ui/button";
import { BsGrid } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { TiThList } from "react-icons/ti";
import { TbLayoutGrid } from "react-icons/tb";
import { GrList, GrAppsRounded } from "react-icons/gr";
import { CommonDialogBox } from "@root/components/CommonDialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@root/components/CommonTabs";
import { motion } from "framer-motion";
import { BookingsTabsData } from ".";
import { IconContext } from "react-icons/lib";
const BookingsHeader = ({ gridType, setGridType }: any) => {
  return (
    <div className="grid grid-cols-2 w-full py-1">
      <div className="col-span-1 flex space-x-4 items-center">
        <Tabs id="map_tab" defaultValue="allOrders" className="pt-3 ">
          {BookingsTabsData?.map((item) => (
            <TabsList className="p-0" key={item?.id}>
              <TabsTrigger
                variant="bottomBorder"
                value={item?.value}
                className="border-b-[1px] data-[state=active]:box-border data-[state=active]:text-black data-[state=active]:font-semibold font-medium  text-[#B3B3B3] border-[#B3B3B366] text-f14 tracking-wide"
              >
                {item?.name}
              </TabsTrigger>
            </TabsList>
          ))}
        </Tabs>
      </div>
      <div className="col-span-1 flex justify-end items-center space-x-4">
        <div className="space-x-2 ">
          <Button
            className={`w-fit h-fit bg-transparent hover:bg-transparent`}
            onClick={() => setGridType("list")}
          >
            <TbLayoutGrid
              className={` text-[22px] `}
              color={gridType === "list" ? "#FF9900" : "#A0AEC0"}
            />
          </Button>
          <Button
            className={`w-fit h-fit bg-transparent hover:bg-transparent`}
            onClick={() => setGridType("table")}
          >
            <RiPlayListAddLine
              fontWeight={700}
              className={` text-f20 `}
              color={gridType === "table" ? "#FF9900" : "#A0AEC0"}
            />
          </Button>
        </div>
        <Button
          className={`w-fit h-fit px-[24px] py-[10px] rounded-[15px] text-white`}
          onClick={() => setGridType("table")}
        >
          New
        </Button>
      </div>
    </div>
  );
};

export default BookingsHeader;
