import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

export { NavLink };

function NavLink({ href, exact, children, ...props }: any) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += "active";
  }

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
}
