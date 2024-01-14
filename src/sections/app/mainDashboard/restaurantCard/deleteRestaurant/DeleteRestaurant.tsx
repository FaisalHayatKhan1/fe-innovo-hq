import LoadingComponent from "@root/components/Loading";
import { Button } from "@root/components/ui/button";
import { useDeleteRestaurantMutation } from "@root/services/restaurant";
import React from "react";
import { enqueueSnackbar } from "notistack";

const DeleteRestaurant = ({ id, setDeleteRestaurant }: any) => {
  const [deleteRestaurantTrigger, { isLoading, isSuccess }] =
    useDeleteRestaurantMutation();
  const deleteRestaurantHandler = async (event: any) => {
    event?.stopPropagation();
    const res: any = await deleteRestaurantTrigger(id);
    if (isSuccess) {
      enqueueSnackbar(res?.data?.message ?? "Restaurant Deleted successfully", {
        variant: "success",
      });
      return;
    }
  };
  return (
    <div className=" space-y-5">
      {isLoading && <LoadingComponent primaryLoading />}
      <h1 className="text-center font-bold text-f24">Confirm</h1>
      <h1 className="text-center font-medium text-f20">
        Are you sure want to permanently delete this restaurant ?
      </h1>
      <div className="flex justify-between px-2">
        <Button
          type="button"
          variant="outline"
          onClick={(event) => {
            event?.stopPropagation();
            setDeleteRestaurant(false);
          }}
        >
          Cancel
        </Button>
        <Button type="button" onClick={deleteRestaurantHandler}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteRestaurant;
