import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Nvidia",
  description: "nvidia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="container-fluid mt-3">
          <div className="container d-flex justify-content-center">
            <Link href={"/"} className="text-center">
              <img
                src="nvidia logo .svg"
                alt="logo nvidia"
                style={{ height: "35px" }}
              />
            </Link>
          </div>
        </header>

        {children}
        <footer
          id="footer"
          className="d-flex flex-column align-items-center justify-content-center text-light mt-5 py5"
          //   style={{ backgroundColor: "black" }}
        >
          <div className="py-5">
            <Link href={"https://www.instagram.com/palometa_/"} target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                style={{ height: "30px" }}
                alt=""
              />
            </Link>
          </div>
          <p>@copirig</p>
        </footer>
      </body>
    </html>
  );
}
