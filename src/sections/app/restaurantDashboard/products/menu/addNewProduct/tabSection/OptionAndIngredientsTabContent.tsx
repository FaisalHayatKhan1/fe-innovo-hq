import SearchSelectField from "@root/components/SearchSelect";
import { RHFTextField } from "@root/components/hook-form";
import { Button } from "@root/components/ui/button";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const OptionAndIngredientsTabContent = ({ setValue }: any) => {
  const [IngredientsData, setIngredientsData] = React.useState<any>([]);

  React.useEffect(() => {
    setValue("ingredients", IngredientsData);
  }, [IngredientsData]);

  
  const optionSetChangeHandler = (val: any) => {
    // get Data from an api onChange
  };
  const newIngredientsHandler = () => {
    setIngredientsData((prev: any) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
      },
    ]);
  };
  const deleteRowHandler = (val: any) => {
    const removeItem = IngredientsData?.filter(
      (item: any) => item?.id !== val?.id
    );
    setIngredientsData(removeItem);
  };
  const inputChangeHandler = (input: any, item: any) => {
    const prevArray = [...IngredientsData];
    const findIndex = IngredientsData?.findIndex(
      (arr: any) => arr?.id === item?.id
    );
    prevArray[findIndex] = {
      ...prevArray[findIndex],
      name: input?.target?.value,
    };
    setIngredientsData(prevArray);
  };
  return (
    <div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Option Sets
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
          inputChangeHandler={optionSetChangeHandler}
          selectedDropDownVal={(val: any) => setValue("optionSet", val)}
          endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
        />
        <div className="text-f14">
          Select option sets to be applied to the item. Option sets are ordered
          according to how they are listed on the option set page, not by the
          order added here
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <RHFTextField
          outerDivStyle=" max-w-full"
          textInputCss="min-w-full rounded-[3px] py-[10px]"
          label="Points"
          type="number"
          name="points"
        />
        <div className="text-f14">
          Number of points that option sets can use for free. Consuming more
          than this value will charge the price of the option set.
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Primary Option Set
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
          inputChangeHandler={optionSetChangeHandler}
          selectedDropDownVal={(val: any) => setValue("primaryOptionSet", val)}
          endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
        />
        <div className="text-f14">
          Designate a primary option set which is 'required' and has
          'multi-select' disabled. This will result in multiple prices showing
          on your item card. For example, if you have 2 pizza sizes, regular and
          large ($5+), the item will show your base item price along with the
          price of the large option
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4">
        <div className="flex justify-between items-center">
          <label htmlFor="subtitle" className="text-f14 font-medium">
            Ingredients
          </label>
          <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
            Optional
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={newIngredientsHandler}>
          Add Ingredients
        </Button>
        <table className="table-auto min-w-full">
          <tbody className="">
            {IngredientsData?.length > 0 &&
              IngredientsData?.map((item: any, index: number) => (
                <tr key={item?.id}>
                  <td className="border border-gray-500 font-normal py-2">
                    <div className="text-f18 font-medium text-center">
                      {index + 1}
                    </div>
                  </td>
                  <td className="border border-gray-500 py-2">
                    <input
                      value={item?.name}
                      type="text"
                      name=""
                      id=""
                      onChange={(input) => inputChangeHandler(input, item)}
                      required
                      className="border-0 outline-none w-full px-2 text-f16"
                    />
                  </td>
                  <td className="border border-gray-500 pl-2 py-2 w-fit">
                    <div
                      className=" cursor-pointer flex justify-center"
                      onClick={() => deleteRowHandler(item)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="text-f14">
          Define a list of ingredients for this item that be can removed by the
          customer when ordering
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
    </div>
  );
};

export default OptionAndIngredientsTabContent;
