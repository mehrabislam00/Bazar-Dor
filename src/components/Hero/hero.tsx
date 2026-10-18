"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";

const Hero = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    );
  }, []);

  return (
    <section className="container mx-auto px-4 py-5">
      <div className="relative flex flex-col sm:flex-row items-center bg-slate-50 border border-slate-100  justify-between gap-6 rounded-3xl px-7 sm:px-10 py-8 sm:py-10 overflow-hidden bg-white shadow-sm border border-slate-100">

        {/* Decorative background blob — top right only */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-52 w-52 rounded-full bg-green-100/60 blur-3xl" />

        {/* Left content */}
        <div className="relative flex flex-col gap-5 w-full sm:max-w-md text-center sm:text-left z-10">

          {/* Date badge */}
          <span className="inline-flex w-fit mx-auto sm:mx-0 items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            {today || "আজ"}
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900 tracking-tight">
            আজকের বাজারের দাম{" "}
            <span className="text-green-600">এক নজরে</span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center sm:justify-start">
            <span className="h-1 w-12 rounded-full bg-green-500" />
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলা—সব বাজারদর এক জায়গায়।
            অঞ্চলভিত্তিক দাম, গড় মূল্য এবং দৈনিক পরিবর্তন দেখুন।
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center sm:justify-start gap-5">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">50+</span>
              <span className="text-[11px] text-slate-400">পণ্য</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">দৈনিক</span>
              <span className="text-[11px] text-slate-400">আপডেট</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">লাইভ</span>
              <span className="text-[11px] text-slate-400">দাম</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center sm:justify-start">
            <a
              href="#all-products"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 transition-all duration-200 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5 active:scale-95"
            >
              সব দাম দেখুন
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="relative shrink-0 z-10">
          <div className="absolute inset-0 rounded-full bg-green-200/40 blur-2xl scale-410" />
          <Image
            src={heroImage}
            alt="তাজা বাজারের ঝুড়ি"
            width={360}
            height={360}
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;