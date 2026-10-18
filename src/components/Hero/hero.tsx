"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";

const Hero = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("en-US", {
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
            {today || "Today"}
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900 tracking-tight">
            Today's Market Prices{" "}
            <span className="text-green-600">at a Glance</span>
          </h1>

          {/* Divider */}
          <div className="flex justify-center sm:justify-start">
            <span className="h-1 w-12 rounded-full bg-green-500" />
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed">
            Rice, dal, oil, vegetables, fish, meat, eggs & spices — all market
            prices in one place. Region-wise breakdown, averages, and daily
            price changes.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center sm:justify-start gap-5">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">50+</span>
              <span className="text-[11px] text-slate-400">Products</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">Daily</span>
              <span className="text-[11px] text-slate-400">Updates</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-800">Live</span>
              <span className="text-[11px] text-slate-400">Prices</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center sm:justify-start">
            <button className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 transition-all duration-200 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5 active:scale-95">
              See All Prices
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative shrink-0 z-10">
          <div className="absolute inset-0 rounded-full bg-green-200/40 blur-2xl scale-410" />
          <Image
            src={heroImage}
            alt="Fresh market basket"
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