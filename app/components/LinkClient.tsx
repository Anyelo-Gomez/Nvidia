"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  route: string;
  name: string;
};

export default function LinkClient(props: Props) {
  const pathname = usePathname();

  return (
    <Link
      role="buttom"
      href={props.route}
      className={`nav-link text-light ${
        props.route == pathname ? "fw-bold " : ""
      }`}
    >
      {props.name}
    </Link>
  );
}
