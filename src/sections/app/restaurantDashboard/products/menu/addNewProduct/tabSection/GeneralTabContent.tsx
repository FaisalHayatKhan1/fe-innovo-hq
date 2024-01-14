import { Tabs, TabsList, TabsTrigger } from "@root/components/CommonTabs";
import SearchSelectField from "@root/components/SearchSelect";
import { RHFTextField } from "@root/components/hook-form";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const GeneralTabContent = ({ itemTypeVal, setValue }: any) => {
  //   const comboPriceType = register("comboPriceType");
  const [itemType, setItemType] = React.useState("Standard");
  const tabChangeHandler = (val: string) => {
    itemTypeVal(val);
    setItemType(val);
  };
  React.useEffect(() => {
    itemType === "Combo" && setValue("comboPriceType", "Standard");
  }, [itemType]);
  const inputChangeHandler = (val: any) => {
    // get Data from an api onChange
  };
  return (
    <div>
      <div className="space-y-4 pb-4">
        <label className="text-f14 font-medium">Kilometres/Miles</label>
        <Tabs
          id="map_tab"
          defaultValue="Standard"
          onValueChange={tabChangeHandler}
        >
          <TabsList className="p-0">
            <TabsTrigger value="Standard"> Standard</TabsTrigger>
            <TabsTrigger value="Combo">Combo</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="text-f14">
          A combo items allows customers to make several choices between
          selected standard items
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          label="Name"
          type="text"
          name="name"
        />
        <div className="text-f14">A unique name for your item</div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          label="Price (₨)"
          type="number"
          name="price"
        />
        <div className="text-f14">This cost of this item</div>
        <hr className=" border-dashed border-customGray" />
      </div>
      {itemType === "Combo" && (
        <div className="space-y-4 pb-4">
          <label className="text-f14 font-medium">Combo Price Type</label>
          <Tabs
            id="map_tab"
            defaultValue="Standard"
            onValueChange={(val) => setValue("comboPriceType", val)}
          >
            <TabsList className="p-0">
              <TabsTrigger value="Standard"> Standard</TabsTrigger>
              <TabsTrigger value="Difference">Difference</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="text-f14">
            Standard pricing means all the combo choices are set at same price.
            Difference pricing will take into account the price differences
            between the various items to increase the price if certain items are
            selected
          </div>
          <hr className=" border-dashed border-customGray" />
        </div>
      )}
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="displayName" className="text-f14 font-medium">
            Display Name
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          id="displayName"
          type="text"
          name="displayName"
        />
        <div className="text-f14">
          Will override the unique name in your store
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="printName" className="text-f14 font-medium">
            Print Name
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          id="printName"
          type="text"
          name="printName"
        />
        <div className="text-f14">
          Will override the unique name on your printed order receipts
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
          id="description"
          type="text"
          name="description"
        />
        <div className="text-f14">
          Will be displayed in your menu and item popup
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Subtitle
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          id="subtitle"
          type="text"
          name="subtitle"
        />
        <div className="text-f14">
          Will be displayed your item name in bold font. Keep it short and sweet
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Option Set Blacklist
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
          selectedDropDownVal={(val: any) =>
            setValue("optionSetBlacklist", val)
          }
          endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
        />
        <div className="text-f14">
          Designate option sets that will be removed from your combo item
          choices
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Taxes
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
          selectedDropDownVal={(val: any) => setValue("taxes", val)}
          endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
        />
        <div className="text-f14">
          Select the taxes which should be applied to the item
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
    </div>
  );
};

export default GeneralTabContent;
