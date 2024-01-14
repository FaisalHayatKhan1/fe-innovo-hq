// form
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

export default function RHFDatePicker({ name, label, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          {/* <DatePicker
            {...field}
            {...other}
            slotProps={{
              textField: {
                helperText: error ? error.message : "",
                error: error,
              },
            }}
            label={label}
          /> */}
        </>
      )}
    />
  );
}
