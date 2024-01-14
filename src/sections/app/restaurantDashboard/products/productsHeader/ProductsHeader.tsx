import React from "react";
import CommonSelect from "@root/components/ui/CommonSelect";
import { Button } from "@root/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { CommonDialogBox } from "@root/components/CommonDialog";
// import AddNewProduct from "../addNewProduct/AddNewProduct";
const ProductsHeader = () => {
  const [gridType, setGridType] = React.useState("landscape");
  const [newProduct, setNewProduct] = React.useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 w-full">
      <div className="col-span-1 flex space-x-4 items-center">
        <div className="bg-white dark:bg-grayScale-secondary space-x-2 p-2 rounded-[16px]">
          <Button
            className={`text-white w-[40px] h-[40px]  ${
              gridType === "landscape"
                ? " bg-success/50"
                : "bg-transparent hover:bg-transparent"
            }`}
            onClick={() => setGridType("landscape")}
          >
            <span className="px-2">
              <CiGrid2H
                className={`text-white text-f20 `}
                color={gridType === "landscape" ? "#FF9900" : "#A0AEC0"}
                width={30}
                height={30}
              />
            </span>
          </Button>
          <Button
            className={`text-white w-[40px] h-[40px] ${
              gridType === "grid"
                ? " bg-success/50"
                : "bg-transparent hover:bg-transparent"
            }`}
            onClick={() => setGridType("grid")}
          >
            <span className="px-2">
              <BsGrid
                className={`text-white text-f20 `}
                color={gridType === "grid" ? "#FF9900" : "#A0AEC0"}
              />
            </span>
          </Button>
        </div>
        <CommonSelect
          className="bg-white dark:bg-grayScale-secondary w-[200px]"
          selectLabel="show :"
          value={""}
          name="products-list"
          onValueChange={() => {}}
          dropDownData={[{ name: "All products", value: "" }]}
        />
      </div>
      <div className="col-span-1 flex justify-end items-center space-x-4">
        <CommonSelect
          className="bg-white dark:bg-grayScale-secondary w-[180px]"
          selectLabel="Sort by :"
          value={""}
          name="products-list"
          onValueChange={() => {}}
          dropDownData={[{ name: "Default", value: "" }]}
        />
        <Button
          className="text-white w-[175px] py-7"
          onClick={() => setNewProduct(true)}
        >
          <span className="px-2">
            <FiPlus className="text-white" width={24} height={24} />
          </span>
          Add products
        </Button>
      </div>
      {/* <CommonDialogBox
      styleContent={`bg-white dark:bg-grayScale-secondary sm:min-w-[600px] h-[95vh] overflow-y-auto data-[state=open]:right-6 top-6 bottom-6`}
      open={newProduct}
        setOpen={setNewProduct}
      >
        <AddNewProduct />
      </CommonDialogBox> */}
    </div>
  );
};

export default ProductsHeader;
