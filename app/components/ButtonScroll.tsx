"use client";

import Link from "next/link";
import { useState } from "react";

export default function ButtonScroll() {
  const [icon, setIcon] = useState("bi-caret-down-fill");
  return (
    <Link
      href={icon == "bi-caret-down-fill" ? "#footer" : "#portada"}
      onClick={() =>
        setIcon(
          icon == "bi-caret-down-fill"
            ? "bi-caret-up-fill"
            : "bi-caret-down-fill"
        )
      }
    >
      <i className={`bi ${icon} fs-1 text-light`}></i>
    </Link>
  );
}
