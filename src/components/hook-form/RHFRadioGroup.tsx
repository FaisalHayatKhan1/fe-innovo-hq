// form
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

export default function RHFRadioGroup({
  name,
  options,
  getOptionLabel,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <>
      {/* <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div>
            <RadioGroup {...field} row {...other}>
              {options.map((option: any, index: number) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={
                    getOptionLabel?.length ? getOptionLabel[index] : option
                  }
                />
              ))}
            </RadioGroup>

            {!!error && (
              <FormHelperText error sx={{ px: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        )}
      /> */}
    </>
  );
}
