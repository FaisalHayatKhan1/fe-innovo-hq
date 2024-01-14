import LoadingComponent from "@root/components/Loading";
import {
  FormProvider,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DEFAULT_VALUES, CreateRestaurantSchema } from ".";
import MapDataSource from "./sections/MapDataSource";
import { Button } from "@root/components/ui/button";
import TimeSlot from "./sections/TimeSlot";
import SearchSelectField from "@root/components/SearchSelect";
import { distanceTypeMockData } from "./MockData";
import { MdKeyboardArrowDown } from "react-icons/md/index";
import TimeFormatting from "./sections/TimeFormatting";
import RHFDateField from "@root/components/hook-form/RHFDateField";
import SubscriptionPlan from "./sections/SubscriptionPlan";
import {
  useCreateRestaurantMutation,
  useSubDomainMutation,
} from "@root/services/restaurant";
import { TIME_ZONE_DATA } from "@root/utils/timezones";
import { CURRENCIES_DATA } from "@root/utils/currencies";
import { RHFSelect } from "@root/components/hook-form";
import { debounce } from "lodash";
import { enqueueSnackbar } from "notistack";
import { Check } from "lucide-react";

const CreateRestaurant = () => {
  const [subDomainTrigger, { isLoading, isSuccess, error: onError }] =
    useSubDomainMutation();

  const [createRestaurantTrigger, { isLoading: isCreating }] =
    useCreateRestaurantMutation();

  const [isValidDomain, setIsValidDomain] = React.useState(false);
  const methods: any = useForm({
    resolver: yupResolver(CreateRestaurantSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, isValid, errors, error },
    reset,
    setError,
    setValue,
    setFocus,
    trigger,
    watch,
  } = methods;

  const onSubmit = async (value: any) => {
    const res: any = await createRestaurantTrigger({
      ...value,
      subscription: {
        plan_name: "free",
        expire_at: "2023-02-01",
      },
    });
    if (res?.data) {
      enqueueSnackbar(res?.data?.message ?? "Restaurant created successfully", {
        variant: "success",
      });
      return;
    }
    if (res?.error) {
      enqueueSnackbar(
        res?.error?.data?.error ?? "Restaurant created successfully",
        {
          variant: "error",
        }
      );
      return;
    }
  };
  const subDomainChangeHandler = debounce(async (event: any) => {
    const res: any = await subDomainTrigger(event?.target?.value);
    if (!res?.data?.available) {
      setError("sub_domain", {
        type: "custom",
        message: "Sub Domain is not available",
      });
      setIsValidDomain(false);
    } else {
      setIsValidDomain(true);
    }
  }, 1000);
  const handleKeyPress = (event: any) => {
    if (event.key === "+" || event.key === "-" || event.key === "e") {
      event.preventDefault();
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <h1 className="text-center text-f32 font-bold mb-3">
          Create Restaurant
        </h1>
        <div className="">
          {/* new Restaurant Form */}
          {isCreating && <LoadingComponent primaryLoading />}
          {/* name */}
          <div className="space-y-4 pb-4">
            <RHFTextField
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px] text-f14"
              id="name"
              label="Name"
              type="text"
              name="name"
            />
            <div>
              <label htmlFor="name" className="text-f14">
                The name of this restaurant location
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <RHFTextField
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px] text-f14"
              id="sub_domain"
              label="Sub-domain"
              type="text"
              name="sub_domain"
              onBlurHandler={() => {
                if (isValidDomain === false) {
                  setValue("sub_domain", "");
                  setIsValidDomain(false);
                }
              }}
              onChange={subDomainChangeHandler}
              endEndadornment={
                isLoading ? (
                  <div>
                    <LoadingComponent secondaryLoading />
                  </div>
                ) : (
                  isValidDomain && (
                    <div>
                      <Check className="text-success" />
                    </div>
                  )
                )
              }
            />
            <div>
              <label className="text-f14">
                Enter the sub-domain name where your online store will be
                located. This can be changed any time. A custom domain can be
                set after creation
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <MapDataSource
              setValue={setValue}
              errors={errors}
              trigger={trigger}
              watch={watch}
            />
          </div>
          <div className="space-y-4 pb-4">
            <div className="flex justify-between items-center">
              <label htmlFor="phoneNumber" className="text-f14 font-medium">
                Phone Number
              </label>
              <div className="rounded border border-gray-600 text-f14 tracking-wide px-1">
                Optional
              </div>
            </div>
            <RHFTextField
              outerDivStyle=" max-w-full"
              textInputCss="min-w-full rounded-[3px] py-[10px] text-f14"
              id="phoneNumber"
              type="number"
              name="phone"
              onKeyDown={handleKeyPress}
            />
            <div>
              <label className="text-f14">
                Enter your store contact number
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4 relative">
            <TimeSlot watch={watch} setValue={setValue} />
          </div>
          <div className="space-y-4 pb-4">
            <div>
              <label
                className={`text-f14 font-medium ${
                  errors?.distance ? "text-error" : ""
                }`}
              >
                Kilometres/Miles
              </label>
            </div>
            <SearchSelectField
              name="distance"
              error={errors?.distance}
              placeholder="Select the distance Type"
              listData={distanceTypeMockData}
              inputChangeHandler={(val: any) => {
                setValue("distance", "");
                trigger("distance");
              }}
              selectedDropDownVal={(val: any) => {
                setValue("distance", val);
                trigger("distance");
              }}
              endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
            />
            {errors?.distance && (
              <h3 className="text-f12 text-error">
                {errors?.distance?.message}
              </h3>
            )}
            <div>
              <label className="text-f14">
                Determines your preferred distance unit
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <div>
              <label
                className={`text-f14 font-medium ${
                  errors?.time_zone ? "text-error" : ""
                }`}
              >
                Timezone
              </label>
            </div>
            <SearchSelectField
              name="time_zone"
              error={errors?.time_zone}
              placeholder="Select from the dropdown or type to search..."
              listData={TIME_ZONE_DATA?.map((item) => ({
                ...item,
                name: `${item?.text} - ${item?.value}`,
              }))}
              inputChangeHandler={(val: any) => {
                setValue("time_zone", "");
                trigger("time_zone");
              }}
              selectedDropDownVal={(val: any) => {
                setValue("time_zone", val);
                trigger("time_zone");
              }}
              endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
            />
            {errors?.time_zone && (
              <h3 className="text-f12 text-error">
                {errors?.time_zone?.message}
              </h3>
            )}
            <div>
              <label className="text-f14">
                Used to accurately calculate store timings
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>

          <div className="space-y-4 pb-4">
            <TimeFormatting setValue={setValue} />
          </div>
          <div className="space-y-4 pb-4">
            <RHFSelect
              id="time_format"
              label="Date Formatting"
              name="date_format"
              styleDropdown={"text-f14 rounded-[3px] focus:bg-transparent py-2"}
              dropDownData={[
                { name: "DD/MM/YY", value: "DD/MM/YY" },
                { name: "DD/MM/YYYY", value: "DD/MM/YYYY" },
                { name: "MMMDDYYYY", value: "MMMDDYYYY" },
                { name: "DDMMMYYYY", value: "DDMMMYYYY" },
                { name: "YYYY/MM/DD", value: "YYYY/MM/DD" },
              ]}
              className="w-full rounded-[3px] py-3 text-f14"
            />
            <div>
              <label className="text-f14">
                Determines your preferred distance unit
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <div>
              <label
                className={`text-f14 font-medium ${
                  errors?.currency ? "text-error" : ""
                }`}
              >
                Currency
              </label>
            </div>
            <SearchSelectField
              name="currency"
              error={errors?.currency}
              placeholder="Select from the dropdown or type to search..."
              listData={CURRENCIES_DATA?.map((item) => ({
                name: `${item?.name} - ${item?.symbolNative}`,
                value: item?.code,
              }))}
              inputChangeHandler={(val: any) => {
                setValue("currency", "");
                trigger("currency");
              }}
              selectedDropDownVal={(val: any) => {
                setValue("currency", val);
                trigger("currency");
              }}
              endEndadornment={<MdKeyboardArrowDown size={"20px"} />}
            />
            {errors?.currency && (
              <h3 className="text-f12 text-error">
                {errors?.currency?.message}
              </h3>
            )}
            <div>
              <label className="text-f14">
                Select your store currency. This affects financial calculations
                and how your prices are disabled
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4 ">
            <div>
              <label className="text-f14 font-medium">Tax In Prices</label>
            </div>
            <RHFSwitch name="tex_in_price" />
            <div>
              <label className="text-f14">
                Enable this if all your prices are already inclusive of tax. If
                this is disabled, taxes will be calculated and added to an
                order's total cost
              </label>
            </div>
            <div>
              <hr className=" border-dashed border-customGray" />
            </div>
          </div>
          <div className="space-y-4 pb-4">
            <SubscriptionPlan
              setValue={setValue}
              watch={watch}
              setError={setError}
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="w-full rounded-[5px] text-white"
          >
            Create Restaurant
          </Button>
        </div>
      </div>
    </FormProvider>
  );
};

export default CreateRestaurant;
