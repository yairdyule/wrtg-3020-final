import { MdAttachMoney, MdMoneyOffCsred } from "react-icons/md";
import { useState } from "react";

export default function Topic(props) {
  // const [defund, setDefund] = useState(props.issue.defund);
  const defund = props.issue.defund;

  console.log(props);

  const DefundSVG = (
    <span className="flex-none inline-flex items-center justify-center p-2 bg-red-900 rounded-md shadow-xl">
      <props.issue.DefundIcon className="text-red-300" />
    </span>
  );
  const DontSVG = (
    <span className="flex-none inline-flex items-center justify-center p-2 bg-green-900 rounded-md shadow-xl">
      <props.issue.DontIcon className="text-green-300" />
    </span>
  );

  const onClick = () => {
    // setDefund((prevStance) => {
    //   // props.onSwitch(props.index, !prevStance);
    //   return !prevStance;
    // });
    props.onSwitch(props.index, !defund);
  };

  return (
    <a onClick={onClick}>
      <div className="w-96 bg-slate-800   rounded-lg px-6 py-8 mt-2 ring-1 ring-gray-900/5 shadow-xl  hover:border-gray-800 hover:bg-gray-900">
        {defund ? DefundSVG : DontSVG}
        <h3 className="text-white mt-5 text-base font-medium tracking-tight">
          {props.issue.topic}
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          {defund ? props.issue.defundText : props.issue.dontText}
        </p>
      </div>
    </a>
  );
}
