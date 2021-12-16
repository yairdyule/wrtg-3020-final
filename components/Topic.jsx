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
    <span className="flex-none inline-flex items-center justify-center p-2 bg-red-900 rounded-md shadow-xl">
      <DefundIcon className="text-red-300" />
    </span>
  );
  const DontSVG = (
    <span className="flex-none inline-flex items-center justify-center p-2 bg-green-900 rounded-md shadow-xl">
      <DontIcon className="text-green-300" />
    </span>
  );

  const onClick = () => {
    setDefund(!defund);
  };

  return (
    <a onClick={onClick}>
      <div className="w-96 bg-slate-800   rounded-lg px-6 py-8 mt-2 ring-1 ring-gray-900/5 shadow-xl  hover:border-gray-800 hover:bg-gray-900">
        {defund ? DefundSVG : DontSVG}
        <h3 className="text-white mt-5 text-base font-medium tracking-tight">
          {topic}
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          {defund ? defundText : dontText}
        </p>
      </div>
    </a>
  );
}
