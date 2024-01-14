import SearchSelectField from "@root/components/SearchSelect";
import RHFTextField from "@root/components/hook-form/RHFTextField";
import { Button } from "@root/components/ui/button";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import FileUploader from "@root/components/ui/fileUploader";
const ImageAndTagsTabContent = ({ setValue }: any) => {
  const [customImage, setCustomImage] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const inputChangeHandler = (val: any) => {
    // get Data from an api onChange
  };
  return (
    <div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="" className="text-f14 font-medium">
            Display Name
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        {!customImage && (
          <div className="flex space-x-5 items-center">
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="w-fit rounded-[5px] "
              onClick={() => {
                setOpen(true);
              }}
            >
              Upload
            </Button>
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="w-fit rounded-[5px]"
              onClick={() => setCustomImage(true)}
            >
              Custom Image
            </Button>
          </div>
        )}
        {customImage && (
          <div className="flex justify-between items-center space-x-3">
            <RHFTextField
              placeholder="Image URL (including https://)"
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px]"
              id="customUrl"
              type="text"
              name="customUrl"
            />
            <Button
              variant="outline"
              type="button"
              size="sm"
              className="w-[150px] rounded-[5px]"
              onClick={() => setCustomImage(false)}
            >
              Normal Image
            </Button>
          </div>
        )}
        <div className="text-f14">
          A combo items allows customers to make several choices between
          selected standard items
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Tags
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <SearchSelectField
          listData={[
            {
              name: "PKR - Pakistani Rupee - ₨",
              value: "PKR",
            },
          ]}
          placeholder="Select from the dropdown or type to search..."
          inputChangeHandler={inputChangeHandler}
          selectedDropDownVal={(val: any) => setValue("tags", val)}
          endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
        />
        <div className="text-f14">Select tags to be shown with the item</div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <FileUploader open={open} setOpen={setOpen} />
    </div>
  );
};

export default ImageAndTagsTabContent;
