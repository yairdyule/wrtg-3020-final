export default function Topic(props) {
  const defund = props.issue.defund;
  const onClick = () => {
    props.onSwitch(props.index, !defund);
  };

  const DefundSVG = (
    <span className="flex-none inline-flex transition duration-300 ease-in-out items-center justify-center p-2 bg-yellow-900 rounded-md shadow-xl ">
      <props.issue.DefundIcon className="text-yellow-300" />
    </span>
  );
  const DontSVG = (
    <span className="flex-none inline-flex transition duration-300 ease-in-out items-center justify-center p-2 bg-blue-900 rounded-md shadow-xl  ">
      <props.issue.DontIcon className="text-blue-300" />
    </span>
  );

  return (
    <a onClick={onClick}>
      <div className="cursor-pointer w-96 sm:w-fill bg-slate-800  h-48 rounded-lg px-6 py-8 mt-2 ring-1 ring-gray-900/5 shadow-xl transition ease-in  duration-150 hover:border-gray-800 hover:bg-gray-900">
        {defund ? DefundSVG : DontSVG}
        <h3 className="text-white mt-5 text-base font-medium tracking-tight">
          {props.issue.topic}
        </h3>
        <p className="text-gray-400 mt-2 sm:max-w-4 text-sm">
          {defund ? props.issue.defundText : props.issue.dontText}
        </p>
      </div>
    </a>
  );
}
