import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-300 bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-4">
        <p className="text-xs text-slate-500 text-center sm:text-left">
          <span className="font-semibold text-slate-700">বাজার দর</span> — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-xs text-slate-400 text-center sm:text-right">
          সকল দাম সহায়ক; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;