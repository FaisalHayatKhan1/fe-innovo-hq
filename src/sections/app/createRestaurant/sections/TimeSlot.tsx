import React, { useState } from "react";
import { Button } from "@root/components/ui/button";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { CustomCheckBox } from "@root/components/CheckBox";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@root/components/Select";
const TimeSlot = ({ watch, setValue }: any) => {
  const timeSlotVal = [
    { id: 1, day: "monday", open: "10:00", close: "21:00", fullday: false },
  ];
  const [timeSlotData, setTimeSlotData] = React.useState(timeSlotVal);

  React.useEffect(() => {
    const openingHour = timeSlotData?.map((item) => ({
      day: item?.day,
      from: item?.open,
      to: item?.close,
    }));
    setValue("opening_hours", openingHour);
  }, [timeSlotData]);

  const copyLineHandler = (val: any) => {
    setTimeSlotData((prev) => [
      ...prev,
      {
        id: Date.now(),
        day: val?.day,
        open: val?.open,
        close: val?.close,
        fullday: val?.fullday,
      },
    ]);
  };

  const selectChangeHandler = (val: any, selectedData: any) => {
    setTimeSlotData((prev) => {
      const crrData = [...prev];
      const index = crrData?.findIndex((item) => item?.id === selectedData?.id);
      const updateData = {
        ...crrData[index],
        day: val,
      };
      crrData[index] = updateData;
      return crrData;
    });
  };
  const openTimeSelectHandler = (val: any, selectedData: any) => {
    setTimeSlotData((prev) => {
      const crrData = [...prev];
      const index = crrData?.findIndex((item) => item?.id === selectedData?.id);
      const updateData = {
        ...crrData[index],
        open: val,
      };
      crrData[index] = updateData;
      return crrData;
    });
  };
  const closeTimeSelectHandler = (val: any, selectedData: any) => {
    setTimeSlotData((prev) => {
      const crrData = [...prev];
      const index = crrData?.findIndex((item) => item?.id === selectedData?.id);
      const updateData = {
        ...crrData[index],
        close: val,
      };
      crrData[index] = updateData;
      return crrData;
    });
  };
  const checkChangeHandler = (val: any, selectedData: any) => {
    setTimeSlotData((prev) => {
      const crrData = [...prev];
      const index = crrData?.findIndex((item) => item?.id === selectedData?.id);
      const updateData = {
        ...crrData[index],
        fullday: val,
      };
      crrData[index] = updateData;
      return crrData;
    });
  };

  const newSlotAddHandler = () => {
    setTimeSlotData((prev) => [
      ...prev,
      {
        id: Date.now(),
        day: "monday",
        open: "10:00",
        close: "21:00",
        fullday: false,
      },
    ]);
  };
  const deleteRowHandler = (val: any) => {
    const removeItem = timeSlotData?.filter((item) => item?.id !== val?.id);
    setTimeSlotData(removeItem);
  };
  return (
    <>
      <div className="">
        <label className="text-f14 font-medium">Opening Hours</label>
      </div>
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={newSlotAddHandler}
      >
        Add Time Slot
      </Button>
      <div>
        <table className="table-auto min-w-full">
          <thead className=" text-left">
            <tr>
              <th className="font-medium py-3 pl-1">Day</th>
              <th className="font-medium py-3 pl-1">Open</th>
              <th className="font-medium py-3 pl-1">Close</th>
              <th className="font-medium py-3 pl-1">24 Hour</th>
            </tr>
          </thead>
          <tbody className="">
            {timeSlotData?.map((item) => (
              <tr key={item?.id}>
                <td className="border border-gray-500 font-normal">
                  <Select
                    value={item?.day}
                    onValueChange={(val) => selectChangeHandler(val, item)}
                  >
                    <SelectTrigger className="p-2 border-0">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectGroup>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="monday"
                        >
                          Monday
                        </SelectItem>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="tuesday"
                        >
                          Tuesday
                        </SelectItem>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="wednesday"
                        >
                          Wednesday
                        </SelectItem>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="thursday"
                        >
                          Thursday
                        </SelectItem>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="friday"
                        >
                          Friday
                        </SelectItem>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="saturday"
                        >
                          Saturday
                        </SelectItem>
                        <SelectItem
                          className="text-f14 px-3 py-2"
                          value="sunday"
                        >
                          Sunday
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border border-gray-500 time-picker-wrapper">
                  <TimePicker
                    format="HH:mm"
                    hourPlaceholder="__"
                    minutePlaceholder="__"
                    disableClock
                    disabled={item?.fullday}
                    clearIcon={null}
                    className=" border-transparent outline-transparent"
                    onChange={(val) => openTimeSelectHandler(val, item)}
                    value={item?.open}
                  />
                </td>
                <td className="border border-gray-500 time-picker-wrapper">
                  <TimePicker
                    format="HH:mm"
                    hourPlaceholder="__"
                    minutePlaceholder="__"
                    disableClock
                    disabled={item?.fullday}
                    clearIcon={null}
                    className=" border-transparent outline-transparent"
                    onChange={(val) => closeTimeSelectHandler(val, item)}
                    value={item?.close}
                  />
                </td>
                <td className="border border-gray-500">
                  <div className="flex justify-center items-center">
                    <CustomCheckBox
                      id="terms1"
                      className={`w-4 h-4 rounded`}
                      checked={item?.fullday}
                      onCheckedChange={(val) => checkChangeHandler(val, item)}
                    />
                  </div>
                </td>
                {timeSlotData?.length > 1 && (
                  <td className="border border-gray-500 pl-2">
                    <div
                      className=" cursor-pointer"
                      onClick={() => deleteRowHandler(item)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                      </svg>
                    </div>
                  </td>
                )}

                <td className="border border-gray-500 pl-2">
                  <div
                    className=" cursor-pointer"
                    onClick={() => copyLineHandler(item)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <label className="text-f14">
          Enter time in 24H format, e.g. 21:00 for 9:00pm. To avoid errors,
          ensure time slots do not overlap or close before they open.
        </label>
      </div>
      <div>
        <hr className=" border-dashed border-customGray" />
      </div>
    </>
  );
};

export default TimeSlot;
