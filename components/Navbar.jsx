import Link from "next/link";
import { RiHomeSmileLine } from "react-icons/ri";
import { BsQuestion } from "react-icons/bs";
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
      className="inline-flex h-10 w-10 items-center justify-center p-2 bg-red-900 rounded-md shadow-xl"
      onClick={onClick}
    >
      <MdMoneyOffCsred className="text-red-300" />
    </button>
  );

  const dontButton = (
    <button
      className="inline-flex h-10 w-10  items-center justify-center p-2 bg-green-900 rounded-md shadow-xl"
      onClick={onClick}
    >
      <MdAttachMoney className="text-green-300" />
    </button>
  );

  return defund ? defundButton : dontButton;
};

export const Navbar = () => {
  const unsureButton = (
    <button className="inline-flex h-10 w-10  items-center justify-center p-2 bg-indigo-900 rounded-md shadow-xl">
      <BsQuestion className="text-indigo-300" />
    </button>
  );
  return (
    <nav className="w-full flex flex-row items-center justify-center space-x-4 text-gray-700 p-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-b-4 border-slate-400 ">
      <Link href="/">
        <a className="text-gray-700 hover:text-gray-200">
          <RiHomeSmileLine className="h-8 w-8 " />
        </a>
      </Link>
      <SwitchButton className="h-8 w-8" />
      <Link href="/disclaimer">
        <a className="text-gray-700 hover:text-yellow-200">
          <MdOutlineWarning className="h-8 w-8" />
        </a>
      </Link>
    </nav>
  );
};
