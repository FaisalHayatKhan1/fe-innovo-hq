// components LeftNavbar.js
import { useState } from "react";
import Link from "next/link";
import { NavData } from "./NavData";
import Image from "next/image";
import { webLogoIcon } from "@root/assets";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
const LeftNavbar = ({ id }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [onHover, setHover] = useState(false);
  const [sidebarId, setSidebarId] = useState(0);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`h-screen
       fixed md:relative
        bg-white
         dark:bg-grayScale-secondary z-50
          text-white ${
            isOpen ? "w-[256px]" : "w-14"
          } transition-all ease-in-out duration-300`}
    >
      <div className="p-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={webLogoIcon}
            className="h-8"
            alt="Flowbite Logo"
            style={{ width: "fit-content" }}
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="text-white h-[32px] w-[32px] absolute right-[-14px] rounded-full border border-grayScale-primary dark:border-customGray flex justify-center items-center"
        >
          {isOpen ? (
            <MdOutlineArrowBackIos className=" text-grayScale-primary dark:text-customGray" />
          ) : (
            <MdOutlineArrowForwardIos className=" text-grayScale-primary dark:text-customGray" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } px-4 text-f12 text-[#A0AEC0] font-medium pt-6`}
      >
        <h1>MENU</h1>
      </div>
      <ul className="">
        <div>
          {NavData?.map((item) => {
            if (item?.id < 11) {
              return (
                <li key={item?.id} className=" ">
                  <Link href={`/app/restaurant/${id}/${item?.link}`}>
                    <div
                      onMouseEnter={() => {
                        setHover(true);
                        setSidebarId(item?.id);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                        setSidebarId(0);
                      }}
                      className=" py-[8px] px-4 hover:text-primary flex space-x-5 font-medium text-f16 text-customGray"
                    >
                      {onHover && item?.id === sidebarId ? (
                        <Image
                          id={item?.name}
                          src={item?.filledIcon}
                          alt=""
                          width={20}
                          height={20}
                          className="hover:hidden:block"
                        />
                      ) : (
                        <Image
                          id={item?.name}
                          src={item?.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="hover:hidden:block"
                        />
                      )}
                      <label
                        className={`${
                          isOpen ? "block" : "hidden"
                        } cursor-pointer`}
                        htmlFor={item?.name}
                      >
                        {item?.name}
                      </label>
                    </div>
                  </Link>
                  {item?.id === 7 && (
                    <div className={`${isOpen ? "pt-7" : "py-7"}`}>
                      <hr className=" border-grayScale-primary dark:border-customGray-secondary" />
                      <div
                        className={`${
                          isOpen ? "block" : "hidden"
                        } px-4 pt-7 pb-4 text-f12 text-[#A0AEC0] font-medium`}
                      >
                        <h1>SALES CHANNEL</h1>
                      </div>
                    </div>
                  )}
                </li>
              );
            }
          })}
        </div>
        <div className=" absolute bottom-0 w-full ">
          {NavData?.map((item) => {
            if (item?.id > 10) {
              return (
                <li key={item?.id} className=" ">
                  <Link href={item?.link}>
                    <div
                      onMouseEnter={() => {
                        setHover(true);
                        setSidebarId(item?.id);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                        setSidebarId(0);
                      }}
                      className=" py-[8px] px-4 hover:text-primary flex space-x-5 font-medium text-f16 text-customGray"
                    >
                      {onHover && item?.id === sidebarId ? (
                        <Image
                          id={item?.name}
                          src={item?.filledIcon}
                          alt=""
                          width={20}
                          height={20}
                          className="hover:hidden:block"
                        />
                      ) : (
                        <Image
                          id={item?.name}
                          src={item?.icon}
                          alt=""
                          width={20}
                          height={20}
                          className="hover:hidden:block"
                        />
                      )}
                      <label
                        className={`${
                          isOpen ? "block" : "hidden"
                        } cursor-pointer`}
                        htmlFor={item?.name}
                      >
                        {item?.name}
                      </label>
                    </div>
                  </Link>
                </li>
              );
            }
          })}
        </div>
      </ul>
    </div>
  );
};

export default LeftNavbar;
