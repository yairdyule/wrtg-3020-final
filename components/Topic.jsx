import { useState } from "react";
import { MdAttachMoney, MdMoneyOffCsred } from "react-icons/md";

export default function Topic({
  topic,
  defundText,
  dontText,
  DefundIcon,
  DontIcon,
}) {
  const [defund, setDefund] = useState(true);
  const DefundSVG = (
    <span className="inline-flex items-center justify-center p-2 bg-red-900 rounded-md shadow-xl">
      <DefundIcon className="text-red-300" />
    </span>
  );
  const DontSVG = (
    <span className="inline-flex items-center justify-center p-2 bg-green-900 rounded-md shadow-xl">
      <DontIcon className="text-green-300" />
    </span>
  );
  return (
    <a onClick={() => setDefund(!defund)}>
      <div className="w-96 bg-gray-900 rounded-lg px-6 py-8 mt-2 ring-1 ring-gray-900/5 shadow-xl hover:bg-gray-800">
        <div>
          {defund ? DefundSVG : DontSVG}
          <h3 className="text-white mt-5 text-base font-medium tracking-tight">
            {topic}
          </h3>
        </div>
        <p className="text-gray-400 mt-2 text-sm">
          {defund ? defundText : dontText}
        </p>
      </div>
    </a>
  );
}
