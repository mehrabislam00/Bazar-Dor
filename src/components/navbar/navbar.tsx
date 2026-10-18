"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentDate(
      new Intl.DateTimeFormat("bn-BD", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date()),
    );
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Left: brand */}
        <Link
          href="/"
          aria-label="বাজার দর হোম"
          className="group flex items-center gap-2 sm:gap-3 rounded-2xl px-2 py-1 transition-colors hover:bg-slate-50"
        >
          {/* Logo tile */}
          <span className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center">
            <span className="absolute inset-0 rounded-2xl bg-green-500/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-green-600 shadow-md ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={Logo}
                alt=""
                width={28}
                height={28}
                className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
              />
            </span>
          </span>

          {/* Wordmark + date */}
          <span className="flex flex-col gap-1 leading-none">
            <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900">
              Bazar Dor
            </span>
            <span className="hidden sm:inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              </span>
              {currentDate || "আজ"}
            </span>
          </span>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3" />
              </svg>
              লগ ইন
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 transition-all duration-200 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              সাইন আপ
            </Link>
          </div>

      
          <button
            type="button"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:bg-slate-50 active:scale-95"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 border-t border-slate-100 bg-white px-4 py-4">
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3" />
            </svg>
            লগ ইন
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 transition-all duration-200 hover:bg-green-700 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            সাইন আপ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;