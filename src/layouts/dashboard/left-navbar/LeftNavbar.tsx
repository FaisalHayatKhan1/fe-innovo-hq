import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavLink } from "@root/components/NavLink";

const LeftNavbar = (props: any) => {
  const router = useRouter();
  const { open } = props;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
    {/* left navbar  */}
    </>
  );
};

export default LeftNavbar;
