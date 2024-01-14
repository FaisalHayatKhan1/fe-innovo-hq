import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@root/lib/utils";
export default function RHFSwitch({
  name,
  label,
  type,
  textInputCss,
  startEndadornment,
  outerDivStyle,
  endEndadornment,
  ref,
  labelCss,
  ...other
}: any) {
  const { control, trigger } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <div className="grid w-fit items-center gap-1.5 my-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                id={name}
                // name={name}
                // onChange={field?.onChange}
                type="checkbox"
                // value={field?.value}
                className="sr-only peer"
                {...field}
                {...other}
              />
              <div className="w-[44px] h-[24px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              {label && (
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {label}
                </span>
              )}
            </label>
          </div>
          {!!error && (
            <h3 className="text-f12 text-error max-w-[385px]">
              {error?.message}
            </h3>
          )}
        </div>
      )}
    />
  );
}
