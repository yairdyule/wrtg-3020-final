import Link from "next/link";
import { useState } from "react";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineWarning,
} from "react-icons/md";

export const Navbar = (props) => {
  return (
    <nav className="w-full flex flex-row items-center justify-center space-x-4 text-gray-900 p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b-2 border-slate-600 ">
      <Link href="/disclaimer">
        <button className="inline-flex shadow-lg h-8 w-10 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md shadow-md transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-yellow-500">
          <MdOutlineWarning className="h-8 w-8" />
        </button>
      </Link>
      <Link href="https://github.com/yairdyule">
        <button className="cursor pointer inline-flex shadow-lg h-8 w-10 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md shadow-md transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-purple-500">
          <BsGithub className="h-8 w-8" />
        </button>
      </Link>
    </nav>
  );
};
