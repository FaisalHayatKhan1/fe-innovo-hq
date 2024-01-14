import { useState } from "react";
// components
import LeftNavbar from "./left-navbar/LeftNavbar";
import Topnavbar from "./top-navbar/TopNavbar";
import Footer from "./footer/testFooter";
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [rightnavbars, setrightbars] = useState(false);
  const handleDrawer = () => (open ? setOpen(false) : setOpen(true));
  const handleDrawerright = () =>
    rightnavbars ? setrightbars(false) : setrightbars(true);

  return (
    <div className="w-full">
      <div className="flex relative w-full">
        <LeftNavbar open={open} setOpen={setOpen} />
        <div className="w-full">
          <div className="px-10 h-[12vh] flex items-center">
            <Topnavbar handleDrawer={handleDrawer} />
          </div>
          <div className="h-[86vh] overflow-auto">{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
