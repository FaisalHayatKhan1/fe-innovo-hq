import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { CommonTable } from "@root/components/CommonTable";
import CommonTableHeader from "@root/components/CommonTableHeader";
import { BookingMockData } from "./MockData";
import { CustomCheckBox } from "@root/components/CheckBox";
import Image from "next/image";
import { CommonProgressBar } from "@root/components/ui/CommonProgressBar copy";
import CommonSwitch from "@root/components/ui/CommonSwitch";

const BookingTableView = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (row: any) => row?.check,
        id: "action",
        cell: (info: any) => (
          <div className="">
            <CustomCheckBox className="rounded-full w-[20px] h-[20px]" />
          </div>
        ),
        header: (props: any) => {
          return (
            <>
              <span>
                <CustomCheckBox className="rounded-full w-[20px] h-[20px]" />
              </span>
            </>
          );
        },
      },
      {
        accessorFn: (row: any) => (
          <div>
            <label htmlFor="" className="text-f16 font-semibold">
              {row?.name}
            </label>
            {row?.id && (
              <h1 className="text-customGray text-f14">ID: {row?.id}</h1>
            )}
          </div>
        ),
        id: "orders",
        cell: (info: any) => (
          <div style={{ paddingLeft: `${info?.row?.depth * 2}rem` }}>
            {info?.getValue()}
          </div>
        ),
        header: () => <span>Orders</span>,
      },
      {
        id: "date",
        accessorFn: (row: any) => (
          <div className="font-semibold">{row?.date}</div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Date</span>,
      },
      {
        id: "customer",
        accessorFn: (row: any) => (
          <div className="font-semibold">{row?.Customer}</div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Customer</span>,
      },
      {
        id: "payment",
        accessorFn: (row: any) => (
          <div
            className={`font-medium px-[16px] py-[6px] rounded-[8px] text-f16 w-fit ${
              row?.Payment === "Paid"
                ? "text-success bg-success/10"
                : "text-[#8C62FF] bg-[#8C62FF]/10"
            }`}
          >
            {row?.Payment}
          </div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Payment</span>,
      },
      {
        id: "Status",
        accessorFn: (row: any) => (
          <div
            className={`font-medium px-[16px] py-[6px] rounded-[8px] text-f16 w-fit ${
              row?.Status === "Completed"
                ? "text-success bg-success/10"
                : row?.Status === "Shipping"
                ? "text-[#8C62FF] bg-[#8C62FF]/10"
                : "text-[#FE964A] bg-[#FE964A]/10"
            }`}
          >
            {row?.Status}
          </div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Status</span>,
      },
      {
        id: "price",
        accessorFn: (row: any) => (
          <div className="font-semibold">{row?.price}</div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Price</span>,
      },
    ],
    []
  );
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-[16px] dark:bg-grayScale-secondary py-2"
    >
      <CommonTableHeader />
      <CommonTable
        data={BookingMockData}
        columns={columns}
        isSuccess={true}
        isPagination={false}
        maxHeight="auto"
        minHeight="auto"
      />{" "}
    </motion.div>
  );
};

export default BookingTableView;
