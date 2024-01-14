import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogPortal } from "./Dialog";
import { cn } from "@root/lib/utils";
export function CommonDialogBox({
  trigger,
  setOpen,
  open,
  styleContent,
  asChild,
  children,
}: any) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className={cn(
            " border-transparent shadow-3xl shadow-grayScale/10 ",
            styleContent
          )}
        >
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
