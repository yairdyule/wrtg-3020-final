import Link from "next/link";
import { RiHomeSmileLine } from "react-icons/ri";
import { useState } from "react";
import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineWarning,
} from "react-icons/md";

export const Navbar = (props) => {
  console.log(props.defund);

  return (
    <nav className="w-full flex flex-row items-center justify-center space-x-4 text-gray-700 p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b-4 border-slate-400 ">
      <Link href="/">
        <a className="text-gray-700 hover:text-gray-200">
          <RiHomeSmileLine className="h-8 w-8 " />
        </a>
      </Link>
      <Link href="/disclaimer">
        <a className="text-gray-700 hover:text-yellow-200">
          <MdOutlineWarning className="h-8 w-8" />
        </a>
      </Link>
    </nav>
  );
};
