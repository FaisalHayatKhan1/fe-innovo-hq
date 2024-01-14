import React from "react";
import { CommonDialogBox } from "@root/components/CommonDialog";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddOptionSetSchema, DEFAULT_VALUES_CATEGORY } from ".";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { Button } from "@root/components/ui/button";
import { useCreateMenuMutation } from "@root/services/product";
import { useAppSelector } from "@root/redux/store";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@root/components/CommonTabs";
import { motion } from "framer-motion";
import SetOptionGeneralTab from "./AddOptionSetTabs/SetOptionGeneralTab";
import SetOptionConditionTab from "./AddOptionSetTabs/SetOptionConditionTab";
const AddOptionSet = ({ open, setOpen }: any) => {
  const restaurant_id = useAppSelector(
    (item) => item?.restaurant?.restaurantId
  );
  const [useCreateCategoryTrigger, { isLoading }] = useCreateMenuMutation();

  const methods: any = useForm({
    resolver: yupResolver(AddOptionSetSchema),
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
        <div className="h-full">
          <h1 className="text-f18 font-semibold mb-3">Create Option Set</h1>
          <hr className="border-customGray" />
          <Tabs id="map_tab" defaultValue="General" className="pt-3">
            <TabsList className="p-0">
              <TabsTrigger value="General" variant="bottomBorder">
                General
              </TabsTrigger>
              <TabsTrigger variant="bottomBorder" value="Options">
                Options
              </TabsTrigger>
              <TabsTrigger variant="bottomBorder" value="Conditions">
                Conditions
              </TabsTrigger>
            </TabsList>
            <TabsContent className="py-2" value="General">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SetOptionGeneralTab setValue={setValue} />
              </motion.div>
            </TabsContent>
            <TabsContent className="py-2" value="Options">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
            </TabsContent>
            <TabsContent className="py-2" value="Conditions">
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SetOptionConditionTab setValue={setValue} />
              </motion.div>
            </TabsContent>
          </Tabs>

          <Button
            type="submit"
            size="sm"
            className="w-full rounded-[5px] text-white mt-4"
          >
            Save
          </Button>
        </div>
      </FormProvider>
    </CommonDialogBox>
  );
};

export default AddOptionSet;
