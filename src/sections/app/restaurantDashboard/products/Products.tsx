import React, { useMemo } from "react";
import { CommonTable } from "@root/components/CommonTable";
import { CustomCheckBox } from "@root/components/CheckBox";
import { TableMockData } from "./MockData";
import { CommonProgressBar } from "@root/components/ui/CommonProgressBar";
import Image from "next/image";
import CommonSwitch from "@root/components/ui/CommonSwitch";
import CommonTableHeader from "@root/components/CommonTableHeader";
import ProductsHeader from "./productsHeader/ProductsHeader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@root/components/CommonTabs";
import OptionSets from "./optionSets/OptionSets";
import { motion } from "framer-motion";
import Menu from "./menu/Menu";
const Products = () => {
  const ColFilterOptions = useMemo(() => {
    return [
      {
        label: "Collection",
        type: "select",
        defaultValue: "",
        Options: [
          { name: "All Collection", value: "" },
          { name: "Email Notice", value: "emailnotice" },
          { name: "Push Notifications", value: "pushnotification" },
          { name: "System Notice", value: "systemnotice" },
        ],
        OnChange: ({ target }: any) => console.log(target),
      },
      {
        label: "Price",
        type: "select",
        defaultValue: "",
        Options: [
          { name: "> $100", value: "" },
          { name: "Email Notice", value: "emailnotice" },
          { name: "Push Notifications", value: "pushnotification" },
          { name: "System Notice", value: "systemnotice" },
        ],
        OnChange: ({ target }: any) => console.log(target),
      },
      {
        label: "Status",
        type: "select",
        defaultValue: "",
        Options: [
          { name: "All Status", value: "" },
          { name: "Active", value: "emailnotice" },
          { name: "No Active", value: "pushnotification" },
        ],
        OnChange: ({ target }: any) => console.log(target),
      },
      {
        label: "Type of Products",
        type: "select",
        defaultValue: "",
        Options: [
          { name: "Outwear", value: "" },
          { name: "Email Notice", value: "emailnotice" },
          { name: "Push Notifications", value: "pushnotification" },
          { name: "System Notice", value: "systemnotice" },
        ],
        OnChange: ({ target }: any) => console.log(target),
      },
    ];
  }, []);

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
              {/* <button onClick={props.table.getToggleAllRowsExpandedHandler()}>
                {props.table.getIsAllRowsExpanded() ? "👇" : "👉"}
              </button> */}
              <span>
                <CustomCheckBox className="rounded-full w-[20px] h-[20px]" />
              </span>
            </>
          );
        },
      },
      {
        accessorFn: (row: any) => (
          <div className="flex items-center space-x-3">
            {row?.image && (
              <div className="bg-[#F1F2F4] w-[56px] h-[56px] overflow-hidden rounded-[12px] flex items-end justify-center">
                <Image
                  width={56}
                  height={56}
                  src={row?.image}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
            )}
            <div>
              <label htmlFor="" className="text-f16 font-semibold">
                {row?.name}
              </label>
              {row?.id && (
                <h1 className="text-customGray text-f14">ID: {row?.id}</h1>
              )}
            </div>
          </div>
        ),
        id: "product-info",
        cell: (info: any) => (
          <div style={{ paddingLeft: `${info?.row?.depth * 2}rem` }}>
            {info?.getValue()}
          </div>
        ),
        header: () => <span>Product Info</span>,
      },
      {
        id: "price",
        accessorFn: (row: any) => (
          <div className="font-semibold">{row?.price}</div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Price</span>,
      },
      {
        id: "stock",
        accessorFn: (row: any) => (
          <div className="font-semibold">{row?.stock}</div>
        ),
        cell: (info: any) => info.getValue(),
        header: () => <span>Stock</span>,
      },
      {
        id: "statistics",
        accessorFn: (row: any) => <div>{row?.paymentMethod}</div>,
        cell: (info: any) => (
          <div className="max-w-[200px]">
            <div className="flex justify-between items-center pb-2">
              <h1 className="text-f14 font-semibold">Perfect</h1>
              <h1 className="text-f14 font-normal text-customGray">
                1.2k sales
              </h1>
            </div>
            <CommonProgressBar className="w-full" value="90" />
          </div>
        ),
        header: () => <span>Statistics</span>,
      },
      {
        id: "action",
        accessorFn: (row: any) => <div>{row?.invoice}</div>,
        cell: (info: any) => (
          <div>
            <CommonSwitch />
          </div>
        ),
        header: () => <span>Active</span>,
      },
    ],
    []
  );
  return (
    <div className="container space-y-2 py-3">
      {/* <ProductsHeader /> */}
      <div className="bg-white rounded-[16px] dark:bg-grayScale-secondary py-2">
        <CommonTableHeader colfilter ColFilterOptions={ColFilterOptions} />
        <Tabs id="map_tab" defaultValue="menu" className="container">
          <TabsList className="p-0">
            <TabsTrigger value="menu" className="text-f14">
              Menus
            </TabsTrigger>
            <TabsTrigger value="optionSets" className="text-f14">
              Option Sets
            </TabsTrigger>
            <TabsTrigger value="itemsTags" className="text-f14">
              Item Tags
            </TabsTrigger>
          </TabsList>
          <TabsContent className="py-2" value="menu">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu />
            </motion.div>
          </TabsContent>
          <TabsContent className="py-2" value="optionSets">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <OptionSets />
              </motion.div>
          </TabsContent>
          <TabsContent
            className="py-2"
            value="options&Ingredients"
          ></TabsContent>
          <TabsContent className="py-2" value="itemChoices"></TabsContent>
        </Tabs>
        <CommonTable
          data={TableMockData}
          columns={columns}
          isSuccess={true}
          isPagination={false}
          maxHeight="auto"
          minHeight="auto"
        />
      </div>
    </div>
  );
};

export default Products;
