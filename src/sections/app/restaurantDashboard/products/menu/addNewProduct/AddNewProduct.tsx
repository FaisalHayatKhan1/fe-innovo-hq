import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
import { DEFAULT_VALUES, AddNewProductSchema } from ".";
import GeneralTabContent from "./tabSection/GeneralTabContent";
import ImageAndTagsTabContent from "./tabSection/ImageAndTagsTabContent";
import OptionAndIngredientsTabContent from "./tabSection/OptionAndIngredientsTabContent";
import ItemChoiceTabContent from "./tabSection/ItemChoiceTabContent";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@root/components/CommonTabs";
import { Button } from "@root/components/ui/button";
import { CommonDialogBox } from "@root/components/CommonDialog";
import { motion } from "framer-motion";
const AddNewProduct = ({ open, setOpen }: any) => {
  const [itemType, setItemType] = React.useState("Standard");
  const methods: any = useForm({
    resolver: yupResolver(AddNewProductSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const {
    handleSubmit,
    register,
    // field: { onChange, onBlur, value, name, ref },
    formState: { isSubmitting, isValid },
    setValue,
    reset,
  } = methods;

  React.useEffect(() => {
    setValue("itemType", itemType);
  }, [itemType]);

  const onSubmit = async (credentials: any) => {
    console.log(credentials);

    // const res: any = await loginTrigger(credentials);
    // const { data, error } = res;
    // if (error) {
    // } else {
    //   reset();
    // }
  };
  return (
    <CommonDialogBox
      styleContent={`bg-white dark:bg-grayScale-secondary  sm:min-w-[550px] h-[95vh] overflow-y-auto data-[state=open]:right-6 top-6 bottom-6`}
      open={open}
      setOpen={setOpen}
    >
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {/* {isLoading && <LoadingComponent primaryLoading />} */}
        {/* name */}
        {/* header */}
        <h1 className="text-f18 font-medium">Create Item</h1>
        <Tabs id="map_tab" defaultValue="General">
          <TabsList className="p-0">
            <TabsTrigger variant="bottomBorder" value="General">
              General
            </TabsTrigger>
            <TabsTrigger variant="bottomBorder" value="image&tags">
              Image & Tags
            </TabsTrigger>
            {itemType === "Standard" ? (
              <TabsTrigger variant="bottomBorder" value="options&Ingredients">
                Options & Ingredients
              </TabsTrigger>
            ) : (
              <TabsTrigger variant="bottomBorder" value="itemChoices">
                Item Choices
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent className="py-2" value="General">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <GeneralTabContent
                itemTypeVal={setItemType}
                setValue={setValue}
              />
            </motion.div>
          </TabsContent>
          <TabsContent className="py-2" value="image&tags">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ImageAndTagsTabContent setValue={setValue} />
            </motion.div>
          </TabsContent>
          <TabsContent className="py-2" value="options&Ingredients">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <OptionAndIngredientsTabContent setValue={setValue} />
            </motion.div>
          </TabsContent>
          <TabsContent className="py-2" value="itemChoices">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ItemChoiceTabContent setValue={setValue} />
            </motion.div>
          </TabsContent>
        </Tabs>
        <div>
          <Button
            type="submit"
            size="sm"
            className="w-full rounded-[5px] text-white"
          >
            Create Restaurant
          </Button>
        </div>
      </FormProvider>
    </CommonDialogBox>
  );
};

export default AddNewProduct;
