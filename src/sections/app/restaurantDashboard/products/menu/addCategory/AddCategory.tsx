import React from "react";
import { CommonDialogBox } from "@root/components/CommonDialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddCategorySchema, DEFAULT_VALUES_CATEGORY } from ".";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { Button } from "@root/components/ui/button";
import { useCreateMenuMutation } from "@root/services/product";
import { useAppSelector } from "@root/redux/store";

const AddCategory = ({ open, setOpen }: any) => {
  const restaurant_id = useAppSelector(
    (item) => item?.restaurant?.restaurantId
  );
  const [useCreateCategoryTrigger, { isLoading }] = useCreateMenuMutation();

  
  const methods: any = useForm({
    resolver: yupResolver(AddCategorySchema),
    defaultValues: DEFAULT_VALUES_CATEGORY,
  });
  const {
    handleSubmit,
    register,
    // field: { onChange, onBlur, value, name, ref },
    formState: { isSubmitting, isValid },
    setValue,
    reset,
  } = methods;
  const onSubmit = async (categoryData: any) => {
    const res: any = await useCreateCategoryTrigger({
      categoryData,
      id: restaurant_id,
    });
    console.log(res, "check response");

    const { data, error } = res;
    if (error) {
    } else {
      reset();
    }
  };
  return (
    <CommonDialogBox
      styleContent={`bg-white dark:bg-grayScale-secondary  sm:min-w-[550px] h-[95vh] overflow-y-auto data-[state=open]:right-6 top-6 bottom-6`}
      open={open}
      setOpen={setOpen}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="relative h-full">
          <h1 className="text-f18 font-semibold">Create Category</h1>
          <div className="space-y-4 pb-4">
            <RHFTextField
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px]"
              label="Name"
              type="text"
              name="name"
            />
            <div className="text-f14">A unique name for your menu</div>
            <hr className=" border-dashed border-customGray" />
          </div>
          <div className="space-y-4 pb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="display_name" className="text-f14 font-medium">
                Display Name
              </label>
              <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
                Optional
              </div>
            </div>
            <RHFTextField
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px]"
              type="text"
              id="display_name"
              name="display_name"
            />
            <div className="text-f14">
              Will override the unique name in your store
            </div>
            <hr className=" border-dashed border-customGray" />
          </div>
          <div className="space-y-4 pb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="description" className="text-f14 font-medium">
                Description
              </label>
              <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
                Optional
              </div>
            </div>
            <RHFTextField
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px]"
              type="text"
              id="description"
              name="description"
            />
            <div className="text-f14">
              Will be displayed above your menu. You can use this to summarise
              your menu requirements. E.g. 'Available Monday-Thursday after
              9:00pm, Pickup's Only'
            </div>
            <hr className=" border-dashed border-customGray" />
          </div>
          <div className="absolute bottom-0 w-full">
            <Button
              type="submit"
              size="sm"
              className="w-full rounded-[5px] text-white mt-4"
            >
              Save
            </Button>
          </div>
        </div>
      </FormProvider>
    </CommonDialogBox>
  );
};

export default AddCategory;
