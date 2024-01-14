// components
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { UnionIcon } from "@root/assets";
import MainLayout from "./main";
import Image from "next/image";
import AuthLayoutSlider from "@root/components/authLayoutSlider/AuthLayoutSlider";
// ----------------------------------------------------------------------
// Constanst

// ----------------------------------------------------------------------

export default function AuthLayout({ children, title, imageNum = 1 }: any) {
  return (
    <React.Fragment>
      {/* <MainLayout /> */}
      <div className="auth-layout">
        <div className="grid grid-cols-2">
          <div className="hidden lg:block col-span-1  h-screen">
            <AuthLayoutSlider />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="flex justify-center items-center h-screen">
              {children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
