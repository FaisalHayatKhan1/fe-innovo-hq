import { RHFTextField } from "@root/components/hook-form";
import React from "react";
import { useGetSubscriptionPlanQuery } from "@root/services/restaurant";
const tableData = [
  {
    id: 1,
    packageType: "Starter",
    fees: "FREE",
    detail: "100 orders & bookings monthly, no staff accounts",
  },
  {
    id: 2,
    packageType: "Standard",
    fees: "$39.00 per month",
    detail: "Unlimited orders & bookings & 5 staff accounts",
  },
  {
    id: 3,
    packageType: "Standard",
    fees: "$390.00 per year",
    detail: "Unlimited orders & bookings & 5 staff accounts",
  },
];

const SubscriptionPlan = ({ watch, setValue, setError }: any) => {
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetSubscriptionPlanQuery();
    console.log(data, "check subssasa");
    
  const [subscription, setSubscription] = React.useState<string>("");
  const [hoverId, setHoveId] = React.useState<string>("");

  React.useEffect(() => {
    if (subscription === "2" || subscription === "3") {
      setValue("subscription", true);
    } else {
      setValue("subscription", false);
    }
  }, [subscription]);

  const handleKeyPress = (event: any) => {
    if (event.key === "+" || event.key === "-" || event.key === "e") {
      event.preventDefault();
    }
  };
  return (
    <>
      <div className="space-y-4 pb-4">
        <div>
          <label className="text-f14 font-medium">Subscription Plan</label>
        </div>
        <div className="flex justify-between items-center">
          <label className="text-f12 px-2 rounded-[2px] bg-customGray/10 dark:bg-customGray">
            All prices in USD
          </label>
          <label className="text-f12 px-2 rounded-[2px] bg-customGray/10 dark:bg-customGray">
            Plans can be modified or cancelled at any time
          </label>
        </div>
        <div>
          <div className=" min-w-full">
            {tableData?.map((item) => (
              <div
                key={item?.id}
                className={`ease-in-out duration-300 grid grid-cols-10 justify-between items-center border cursor-pointer hover:scale-[1.015] hover:border-primary hover:text-primary ${
                  String(item?.id) === subscription
                    ? "border-primary text-primary border-[1.5px]"
                    : "border-slate-500"
                }`}
                onClick={() => {
                  setSubscription(String(item?.id));
                }}
                onMouseEnter={() => {
                  setHoveId(String(item?.id));
                }}
                onMouseLeave={() => {
                  setHoveId("");
                }}
              >
                <div className="">
                  <div
                    className={` m-3 h-3 w-3 rounded-full border hover:bg-primary hover:border-primary ${
                      String(item?.id) === subscription ||
                      String(item?.id) === hoverId
                        ? "bg-primary border-primary"
                        : "border-slate-500"
                    }`}
                  ></div>
                </div>
                <div className="text-f12 col-span-1">{item?.packageType}</div>
                <div className="text-f12 col-span-2 pl-3">{item?.fees}</div>
                <div className="text-f12 col-span-6 pl-3">
                  <div className="pl-[20px]">{item?.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" text-center">
          <label className="text-f14">
            Choose the yearly plan and get 2 months free
          </label>
        </div>
        <div>
          <hr className=" border-dashed border-customGray" />
        </div>
      </div>
      {(subscription === "2" || subscription === "3") && (
        <div className="space-y-4 pb-4">
          <div>
            <label className="text-f14 font-medium">Credit Card Details</label>
          </div>
          <div className="flex justify-between space-x-4">
            <RHFTextField
              placeholder="Name On Card"
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px] text-f14"
              id="plan_name"
              type="text"
              name="plan_name"
            />
            <RHFTextField
              placeholder="Card Number:   MM/YY"
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px] text-f14"
              id="expire_at"
              type="number"
              name="expire_at"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div>
            <label className="text-f14">
              You will only be billed after 24 hours
            </label>
          </div>
          <div>
            <hr className=" border-dashed border-customGray" />
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionPlan;
