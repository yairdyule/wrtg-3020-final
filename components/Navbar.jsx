import Link from "next/link";
import { useContext, useState } from "react";
import {
  useOpinion,
  useOpinionUpdate,
  useUnsure,
  useUnsureUpdate,
} from "./OpinionContext";
import { RiHomeSmileLine } from "react-icons/ri";
import {
  MdAttachMoney,
  MdMoneyOffCsred,
  MdOutlineWarning,
} from "react-icons/md";

const SwitchButton = () => {
  const [defund, setDefund] = useState(true);

  const onClick = () => {
    setDefund(!defund);
  };

  const defundButton = (
    <button
      className="inline-flex items-center justify-center p-2 bg-red-900 rounded-md shadow-xl"
      onClick={onClick}
    >
      <MdMoneyOffCsred className="text-red-300" />
    </button>
  );

  const dontButton = (
    <button
      className="inline-flex items-center justify-center p-2 bg-green-900 rounded-md shadow-xl"
      onClick={onClick}
    >
      <MdAttachMoney className="text-green-300" />
    </button>
  );
  return defund ? defundButton : dontButton;
};

export const Navbar = () => {
  return (
    <aside className="w-full flex flex-row items-center justify-center space-x-4 text-gray-700 p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b-4 border-slate-400 ">
      <RiHomeSmileLine className="h-6 w-6 " />
      <SwitchButton className="h-6 w-6" />
      <MdOutlineWarning className="h-6 w-6" />
    </aside>
  );
};
