// form
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

export default function RHFPasssword({
  name,
  type = "password",
  label,
  startEndadornment,
  endEndadornment,
  passwordInputCss,
  labelCss,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="grid w-full  items-center gap-1.5 my-2">
          {label && (
            <label
              className={`text-f12 font-semibold ${
                !!error ? "text-error" : "text-black"
              } pb-1 ${labelCss}`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <div className="relative">
            <input
              type={type}
              {...field}
              {...other}
              className={`${
                startEndadornment ? "pl-10" : "pl:2"
              } pr-12 bg-gray-100 border border-gray-300 rounded-2xl focus-visible:ring-transparent ${
                !!error
                  ? "focus:border-error border-error"
                  : "focus:border-primary"
              } ${passwordInputCss}`}
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
          {!!error && <h3 className="text-f12 text-error">{error?.message}</h3>}
        </div>
      )}
    />
  );
}
