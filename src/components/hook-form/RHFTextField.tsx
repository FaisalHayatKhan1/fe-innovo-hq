import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@root/lib/utils";
export default function RHFTextField({
  name,
  label,
  type,
  textInputCss,
  onBlurHandler = () => {},
  startEndadornment,
  outerDivStyle,
  onChange = () => {},
  endEndadornment,
  ref,
  errorStyle,
  labelCss,
  ...other
}: any) {
  const { control, trigger } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="grid w-full items-center gap-1.5 my-2">
          {label && (
            <label
              className={`text-f14 font-medium ${
                !!error ? "text-error" : ""
              } pb-1 ${labelCss}`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <div
            ref={ref}
            className={cn(`relative max-w-[385px] ${outerDivStyle}`)}
          >
            <input
              className={cn(
                `${
                  startEndadornment ? "pl-8" : "pl:2"
                } border bg-transparent rounded-[10px] min-w-[385px]  focus-visible:outline-none text-f12 py-[16px] px-[20px] font-normal ${
                  !!error
                    ? "focus:border-error border-error"
                    : "focus:border-primary border-customGray"
                } ${textInputCss}`
              )}
              type={type}
              {...field}
              {...other}
              onBlur={(e) => {
                trigger(name);
                onBlurHandler();
              }}
              onChange={(e) => {
                field.onChange(e);
                trigger(name);
                onChange(e);
              }}
            />
            {startEndadornment && (
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                {startEndadornment}
              </div>
            )}
            {endEndadornment && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {endEndadornment}
              </div>
            )}
          </div>
          {!!error && <h3 className={"text-f12 text-error"}>{error?.message}</h3>}
        </div>
      )}
    />
  );
}
