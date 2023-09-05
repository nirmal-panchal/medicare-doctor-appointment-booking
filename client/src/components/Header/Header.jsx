import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const router = useRouter();
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else headerRef.current.classList.remove("sticky_header");
    });
  };
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  useEffect(() => {
    handleHeader();
    return () => window.removeEventListener("scroll", handleHeader);
  });

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* === logo === */}
          <div>
            <img src="/images/logo.png" alt="" />
          </div>

          {/* === menu === */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem] justify-center">
              <li>
                <Link
                  href="/home"
                  className={
                    router.route === "/home"
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={
                    router.route === "/services"
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className={
                    router.route === "/doctors"
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  }
                >
                  Find A Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    router.route === "/contact"
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* === nav right === */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link href="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src="/images/avatar-icon.png"
                    alt=""
                    className="w-full rounded-full"
                  />
                </figure>
              </Link>
            </div>
            <Link href="/auth/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
