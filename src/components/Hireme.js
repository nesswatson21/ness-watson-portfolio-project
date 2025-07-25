import React from "react";
import { CircularTextAlt } from "./Icons";
import Link from "next/link";

function Hireme() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute md:hidden">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularTextAlt className={"fill-dark animate-spin-slow"} />
        <Link
          href="https://nieztarooy.blogspot.com/"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px]"
        >
          Visit
        </Link>
      </div>
    </div>
  );
}

export default Hireme;
