import React from "react";
import { Button } from "@root/components/ui/button";
import { CommonDialogBox } from "@root/components/CommonDialog";
import CreateRestaurant from "../../createRestaurant/CreateRestaurant";
import { useRouter } from "next/router";

const RestaurantHeader = ({ children }: React.PropsWithChildren) => {
  const [newRestaurant, setNewRestaurant] = React.useState<boolean>(false);
  return (
    <div className=" max-w-3xl m-auto p-10">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-f20 font-semibold tracking-wide">Restaurants</h3>
          <Button
            type="button"
            size="sm"
            className="text-white"
            onClick={() => setNewRestaurant(true)}
          >
            New Restaurant
          </Button>
        </div>
        <div>{children}</div>
      </div>
      <CommonDialogBox
        styleContent={`bg-white dark:bg-grayScale-secondary sm:max-w-[650px] h-[95vh] overflow-y-auto data-[state=open]:right-6 top-6 bottom-6`}
        open={newRestaurant}
        setOpen={setNewRestaurant}
      >
        <CreateRestaurant />
      </CommonDialogBox>
    </div>
  );
};

export default RestaurantHeader;
