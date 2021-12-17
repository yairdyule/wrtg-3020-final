import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineWarning, MdOutlineMail } from "react-icons/md";

export const Navbar = () => {
  const [email, setEmail] = useState(false);

  return (
    <nav className="w-full flex flex-row items-center justify-center space-x-4 text-gray-900 p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b-2 border-slate-600 ">
      <Link href="/">
        <button className="inline-flex shadow-lg h-8 w-10 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md shadow-md transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-yellow-500">
          <MdOutlineWarning className="h-8 w-8" />
        </button>
      </Link>
      <Link href="https://github.com/yairdyule/wrtg-3020-final">
        <button className="cursor pointer inline-flex shadow-lg h-8 w-10 text-slate-500 items-center justify-center p-2 bg-slate-800 rounded-md shadow-md transition ease-out duration-150  hover:bg-slate-800 hover:shadow-xl hover:text-purple-400">
          <BsGithub className="h-8 w-8" />
        </button>
      </Link>
      <button
        className="group cursor pointer shadow-lg text-slate-500 flex items-center justify-center p-2 bg-slate-800 rounded-md shadow-md transition ease-out duration-150 hover:bg-slate-800 hover:shadow-xl hover:text-emerald-600"
        onMouseEnter={() => setEmail(true)}
        onMouseLeave={() => setEmail(false)}
      >
        <MdOutlineMail className="h-8 w-8" />
        {email && (
          <p className="text-slate-500 text-sm invisible transition delay-150 duration-300 group-hover:visible group-hover:text-emerald-500 ">
            jaje9434@colorado.edu
          </p>
        )}
      </button>
    </nav>
  );
};
