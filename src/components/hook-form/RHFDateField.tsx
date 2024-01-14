// form

import { CalendarIcon } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

// ----------------------------------------------------------------------

export default function RHFDateField({
  name,
  label,
  type,
  textInputCss,
  startEndadornment,
  outerDivStyle,
  endEndadornment,
  labelCss,
  ...other
}: any) {
  const [popoverOpen, setPopoverOpen] = useState<any>(false);
  const { control } = useFormContext();
  const disablePastDates = {
    before: new Date(), // Disable dates before today
  };

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
              }  pb-1 ${labelCss}`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <Popover open={popoverOpen} onOpenChange={() => setPopoverOpen(true)}>
            <PopoverTrigger className="w-full" asChild>
              <Button
                variant={"outline"}
                className={cn(
                  `border-customGray hover:border-primary hover:text-primary h-11 bg-transparent rounded-[3px] min-w-[385px] focus-visible:outline-none text-f16 py-[10px] px-[20px] font-normal ${
                    !!error
                      ? "focus:border-error border-error"
                      : "focus:border-primary"
                  }`,
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  format(field.value, "dd/LL/Y")
                ) : (
                  <span>dd/mm/yy</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-primary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              onFocusOutside={() => {
                setPopoverOpen(false);
              }}
              className="w-auto p-0 border-0 rounded-[10px] overflow-hidden"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(date) => {
                  field.onChange(date);
                  setPopoverOpen(false);
                }}
                disabled={disablePastDates}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {!!error && <h3 className="text-f12 text-error">{error?.message}</h3>}
        </div>
      )}
    />
  );
}
