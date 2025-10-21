import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import LinkClient from "./components/LinkClient";

import Link from "next/link";
import BootstrapClient from "./components/BootstrapClient";

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

          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-three-dots fs-3 text-light"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ">
                  <LinkClient name="HOME" route="/"></LinkClient>
                  <LinkClient name="PRODUCTS" route="/products"></LinkClient>
                  <LinkClient name="RTX" route="/rtx"></LinkClient>
                  <LinkClient name="DLSS" route="/dlss"></LinkClient>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {children}
        {<BootstrapClient />}
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
          <p>
            Política de privacidadTérminos de servicioContactar Copyright © 2025
            NVIDIA Corporation
          </p>
        </footer>
      </body>
    </html>
  );
}
