// form
import { useFormContext, Controller } from "react-hook-form";
import { CustomCheckBox } from "../CheckBox";

// ----------------------------------------------------------------------

export function RHFCheckbox({
  name,
  checkboxStyle,
  checkBoxLabel,
  styleLabel,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex space-x-2">
            <CustomCheckBox
              id="terms1"
              className={`${checkboxStyle}`}
              checked={field.value}
              onCheckedChange={field.onChange}
              {...field}
              {...other}
            />
            {checkBoxLabel && (
              <div>
                <label
                  htmlFor="terms1"
                  className={`${styleLabel}`}
                >
                  {checkBoxLabel}
                </label>
              </div>
            )}
          </div>
        )}
      />
    </>
  );
}

// ----------------------------------------------------------------------
