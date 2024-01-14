import React from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import SearchSelectField from "@root/components/SearchSelect";
import { TbLetterK } from "react-icons/tb";
import BadgeButton from "@root/components/ui/BadgeButton";
import { BiCommand } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Separator } from "@root/components/ui/Separator";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AvatarComponent } from "@root/components/ui/Avatar";
import { UserImage } from "@root/assets";
import Image from "next/image";
const TopNavbar = () => {
  const { pathname } = useRouter();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex justify-between items-center h-full px-10">
      <div>
        <h1 className=" font-bold texy-f24">Hi, Tynisha!</h1>
        <p className="text-f14 font-normal text-customGray">
          Let’s check your store today
        </p>
      </div>
      <div className=" flex space-x-4 items-center">
        <button
          className={`border px-3 heading-6 rounded ${
            currentTheme == "light" && "bg-[#FF9900]"
          }`}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className={`border px-3 heading-6 rounded ${
            currentTheme == "dark" && "bg-[#FF9900]"
          }`}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <SearchSelectField
          defaultValue={{
            name: "",
            value: "",
          }}
          placeholder="Search..."
          listData={[]}
          textInputCss="border-0 bg-[#FAFAFA] dark:bg-customGray-secondary rounded-[12px] placeholder:text-[#A0AEC0] pr-14 max-w-[284px]"
          startEndadornment={
            <div>
              <FiSearch className="w-[22px] h-[22px]" />
            </div>
          }
          inputChangeHandler={() => {}}
          selectedDropDownVal={(val: any) => console.log(val)}
          endEndadornment={
            <div className="flex items-center space-x-2 ">
              <BiCommand className="w-[22px] h-[22px]" />
              <TbLetterK className="w-[20px] h-[20px] stroke-[3px]" />
            </div>
          }
        />
        <BadgeButton
          type="button"
          className="bg-transparent hover:bg-transparent"
        >
          <HiOutlineMail className="w-[22px] h-[22px]" />
        </BadgeButton>
        <BadgeButton
          type="button"
          className="bg-transparent hover:bg-transparent"
          badgeClassName="right-[2px]"
        >
          <MdOutlineNotificationsNone className="w-[23px] h-[23px]" />
        </BadgeButton>
        <Separator
          orientation="vertical"
          className="h-10 w-[1.2px] bg-grayScale-primary dark:bg-customGray-secondary"
        />
        <div className="flex items-center">
          <AvatarComponent
            image={
              "https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            }
          />
          <div className="min-w-full pl-5 whitespace-nowrap">
            <h1 className=" font-bold texy-f16">Tynisha Obey</h1>
            <p className="text-f12 font-normal text-customGray ">Makostore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
