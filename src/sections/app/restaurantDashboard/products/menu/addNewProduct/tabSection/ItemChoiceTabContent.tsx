import { RHFSwitch, RHFTextField } from "@root/components/hook-form";
import { Button } from "@root/components/ui/button";
import React from "react";

const ItemChoiceTabContent = ({ setValue }: any) => {
  const [ChoiceData, setChoiceData] = React.useState<any>([]);

  React.useEffect(() => {
    setValue("addChoice", ChoiceData);
  }, [ChoiceData]);
  const newIngredientsHandler = () => {
    setChoiceData((prev: any) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
      },
    ]);
  };
  const deleteRowHandler = (val: any) => {
    const removeItem = ChoiceData?.filter((item: any) => item?.id !== val?.id);
    setChoiceData(removeItem);
  };
  const inputChangeHandler = (input: any, item: any) => {
    const prevArray = [...ChoiceData];
    const findIndex = ChoiceData?.findIndex((arr: any) => arr?.id === item?.id);
    prevArray[findIndex] = {
      ...prevArray[findIndex],
      name: input?.target?.value,
    };
    setChoiceData(prevArray);
  };
  return (
    <div>
      <div className="space-y-4 pb-4">
        <Button size="sm" variant="outline" onClick={newIngredientsHandler}>
          Add Choice
        </Button>
        <table className="table-auto min-w-full">
          <tbody className="">
            {ChoiceData?.length > 0 &&
              ChoiceData?.map((item: any, index: number) => (
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
          Define choices that can contain a list of items a customer can select
          from. If a choice only has a single item, then it will be preselect
          when ordering
        </div>
        <hr className=" border-dashed border-customGray" />
      </div>
      <div className="space-y-4 pb-4 ">
        <div className="text-f14 font-medium">
          Use Item Points as Combo Points
        </div>
        <RHFSwitch name="itemAsComboPoint" />
        <div className="text-f14">
          Use items' points instead of combo points below. If this is enabled,
          the combo points will be the total of the selected items' individual
          points; and it will ignore the Points value below. Default is
          disabled.
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
    </div>
  );
};

export default ItemChoiceTabContent;
