import React from "react";
import { Button } from "@root/components/ui/button";
import { CommonDialogBox } from "@root/components/CommonDialog";
import DeleteRestaurant from "./deleteRestaurant/DeleteRestaurant";
const RestaurantCard = ({
  name = "Test Restaurant",
  status = "Active",
  totalOrder = "108",
  orderLeft = "100",
  FreeOrderReset = "20/09/2023",
  id,
  onClick,
}: any) => {
  const [deleteRestaurant, setDeleteRestaurant] = React.useState(false);
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-grayScale-secondary p-6 space-y-4 rounded-[8px] shadow cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-f16 font-medium">{name}</h1>
        <div className="bg-success rounded-full text-f12 font-medium px-3 py-0.5 tracking-wide text-white">
          {status}
        </div>
      </div>
      <div className="sm:flex sm:space-x-6">
        <h1 className="text-f14">
          Total orders
          <span className=" dark:bg-theme-dark bg-theme-light rounded-[2px] px-1 ml-4 font-medium">
            {totalOrder}
          </span>
        </h1>
        <h1 className="text-f14">
          Order left
          <span className=" dark:bg-theme-dark bg-theme-light rounded-[2px] px-1 ml-4 font-medium">
            {orderLeft}
          </span>
        </h1>
        <h1 className="text-f14">
          Free orders reset
          <span className=" dark:bg-theme-dark bg-theme-light rounded-[2px] px-1 ml-4 font-medium">
            {FreeOrderReset}
          </span>
        </h1>
      </div>
      <div className="sm:flex space-x-4">
        <Button type="button" variant="outline" size="xs">
          Manage
        </Button>
        <Button type="button" variant="outline" size="xs">
          View Store
        </Button>
        <Button type="button" variant="outline" size="xs">
          Billing
        </Button>
        <Button
          type="button"
          variant="outline"
          size="xs"
          onClick={(event) => {
            event?.stopPropagation();
            setDeleteRestaurant(true);
          }}
        >
          Delete
        </Button>
      </div>
      <CommonDialogBox
        styleContent={`bg-white dark:bg-grayScale-secondary`}
        open={deleteRestaurant}
        setOpen={setDeleteRestaurant}
      >
        <DeleteRestaurant id={id} setDeleteRestaurant={setDeleteRestaurant} />
      </CommonDialogBox>
    </div>
  );
};

export default RestaurantCard;
